import axios from "axios";
import "./delete-note.css";

const DeleteNote = ({id}) => {
    const deleteNote = () => {
        axios.delete(`https://notes-app-emel.herokuapp.com/delete-note/${id}`);
        setTimeout(() => {
            window.location.href = "/";
        }, 1000);
    };
    return (
        <div className="marg">
        <button className="delete-btn" onClick={deleteNote}>Delete Note</button>
        </div>
    );
    }

export default DeleteNote;