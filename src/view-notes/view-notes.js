import axsios from "axios";
import { useEffect, useState } from "react";


const ViewNotes = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const fetchNotes = () => {
      axsios.get("https://notes-app-emel.herokuapp.com/notes").then((res) => {
        setNotes(res.data);
      });
    };
    fetchNotes();
  }, []);
  return (
    <div>
      <div className="topHeader">
        <h1>Notes</h1>
        <a href="/add-note">Add Note</a>
      </div>

      {notes.map((note) => (
        <div key={note.id} className="note" >
          <a href={`/notes/${note.id}`}>{note.title}</a>
        </div>
      ))}
    </div>
  );
};

export default ViewNotes;
