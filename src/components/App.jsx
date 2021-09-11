import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note){
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    })
  }

  function deleteNote(id){
    setNotes((prevNote)=> {
      return(
        prevNote.filter((item, index)=>{
          return index !== id;
        })
      )
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      {notes.map((note, i)=>{
      return  (<Note key={i} id={i} title={note.title} content={note.content} onDel={deleteNote}/>)
      })}


      <Footer />
    </div>
  );
}

export default App;
