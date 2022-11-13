import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const EditNote = () => {
    const location = useLocation();
    const noteId = location.pathname.split("/")[2];
    const [note, setNote] = useState(null);
    const [message, setMessage] = useState(null);
    
    useEffect(() => {
        const fetchNote = () => {
        axios.get(`https://notes-app-emel.herokuapp.com/notes/${noteId}`).then((res) => {
            setNote(res.data);
        });
        };
        fetchNote();
    }, [noteId]);
    
    const updateNote = () => {
        axios.put(`https://notes-app-emel.herokuapp.com/edit-note/${noteId}`, {
        title: note.title,
        body: note.body,
        }).then((res) => {
        setMessage(res.data);
        }
        );
    };
    
    return (
        <div>
        <div className="topHeader">
            <h1>Notes</h1>
            <a href="/">View All Notes</a>
        </div>
        {note && (
            <div>
            <div>
                <input
                type="text"
                value={note.title}
                onChange={(e) => setNote({ ...note, title: e.target.value })}
                />
                <button onClick={updateNote}>Update</button>
            </div>
            <textarea
                value={note.body}
                onChange={(e) => setNote({ ...note, body: e.target.value })}
            />
            </div>
        )}
        <div className="msg">{message}</div>
        </div>
    );
    }


export default EditNote;