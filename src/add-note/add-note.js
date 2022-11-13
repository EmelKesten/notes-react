import axios from "axios";
import { useState } from "react";
import "./add-note.css";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");
  const addNote = () => {
    axios.post("https://notes-app-emel.herokuapp.com/notes", {
      title,
      body,
    }).then((res) => {
        setMessage(res.data);
        }
    );
    setTitle("");
    setBody("");
  };

  return (
    <div>
      <div className='topHeader'>
            <h1>Notes</h1>
            <a href='/' >View Notes</a>
        </div>
        <div className='addNote'>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input-title"
      />
      <input
        type="text"
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="input-body"
      />
      <button onClick={addNote}>Add Note</button>
      <div className="msg" >{message}</div>
      </div>
    </div>
  );
};

export default AddNote;
