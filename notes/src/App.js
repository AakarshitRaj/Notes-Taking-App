import React from 'react'
import NotesList from './component/NotesList'
import { useState } from 'react'
import {nanoid} from 'nanoid';
import './index.css'
import Search from './component/Search';

const App = () => {
  const [notes, setNotes]= useState([
    {
    id:nanoid(),
    text:"This is my first Note",
    date:"15/4/2023"
  },
  {
    id:nanoid(),
    text:"This is my second Note",
    date:"16/4/2023"
  },
  {
    id:nanoid(),
    text:"This is my third Note",
    date:"17/4/2023"
  },
  {
    id:nanoid(),
    text:"This is my new Note",
    date:"19/4/2023"
  },
]);
const[searchText,setSearchText]=useState('');

const addNote=(text)=>{
 const date=new Date();
 const newNote={
  id:nanoid(),
  text:text,
  date:date.toLocaleDateString(),
 };
 const newNotes=[...notes,newNote];
 setNotes(newNotes);
};
const deleteNote=(id)=>{
  const newNotes=notes.filter((note)=> note.id !==id);
  setNotes(newNotes);

}
  return (
    <div className='container'>
      <Search handleSearchNote={setSearchText}/>
      <NotesList 
      notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText)
        )} 
      handleAddNote={addNote}
      handleDeleteNote={deleteNote}
      />
    </div>
  )
}

export default App
