import React from 'react';
import {MdDeleteForever}from 'react-icons/md'
import './Note.css'

const Note = () => {
  return (
    <div className="note">
        <span>Hello! this is our first notes</span>
        <div className="note-footer">
            <small>13/07/23</small>
            <MdDeleteForever className='delete-icons' size='1.3em'/>
        </div>
    </div>
  )
}

export default Note
