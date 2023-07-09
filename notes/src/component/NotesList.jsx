import React from 'react'
import Note from './Note'
import './NotesList.css'

const NotesList = () => {
  return (
    <div className='notes-list'>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
    </div>
  )
}

export default NotesList
