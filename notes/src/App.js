import { useState, useEffect } from 'react';
import NotesList from './component/NotesList';
import { nanoid } from 'nanoid';
import './index.css';
import Search from './component/Search';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first Note",
      date: "15/4/2023"
    },
    {
      id: nanoid(),
      text: "This is my second Note",
      date: "16/4/2023"
    },
    {
      id: nanoid(),
      text: "This is my third Note",
      date: "17/4/2023"
    },
    {
      id: nanoid(),
      text: "This is my new Note",
      date: "19/4/2023"
    },
  ]);

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className='container'>
      <div className='header'>
        <h1>Notes</h1>
      </div>
      <Search handleSearchNote={setSearchText} />
      <NotesList
        notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote} // Corrected prop name
      />
    </div>
  );
};

export default App;
