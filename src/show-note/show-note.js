import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import DeleteNote from "../delete-note/delete-note";
import "./show-note.css";

const ShowNote = () => {
  const location = useLocation();
  const noteId = location.pathname.split("/")[2];
  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchNote = () => {
      axios.get(`https://notes-app-emel.herokuapp.com/notes/${noteId}`).then((res) => {
        setNote(res.data);
      });
    };
    fetchNote();
  }, [noteId]);

  const EditNote = ({id}) => {
    const editAaction = () => {
      window.location.href = `/edit-note/${id}`;
    };
    return (
      <div className="marg">
        <button className="edit-btn" onClick={editAaction}>
          Edit Note
        </button>
      </div>
    );
  };

  return (
    <div>
      <div className="topHeader">
        <h1>Notes</h1>
        <a href="/">View All Notes </a>
      </div>
      {note && (
        <div className="show-note-container" >
          <div className="note-title-btn">
            <h1>{note.title}</h1>
            <div>
              <EditNote id={note.id} />
            <DeleteNote id={note.id} />
            </div>
          </div>
          <p>{note.body}</p>
        </div>
      )}
    </div>
  );
};

export default ShowNote;
