import React from 'react';
import {MdDeleteForever}from 'react-icons/md'
import './Note.css'

const Note = ({id,text,date,handleDeleteNode}) => {
  return (
    <div className="note">
        <span>{text}</span>
        <div className="note-footer">
            <small>{date}</small>
            <MdDeleteForever 
            onClick={()=>handleDeleteNode(id)} 
            className='delete-icons' 
            size='1.3em'
            />
        </div>
    </div>
  )
}

export default Note
