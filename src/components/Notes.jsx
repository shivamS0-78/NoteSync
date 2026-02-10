import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeNotes } from '../redux/notesSlice';

const Notes = () => {

  const notes = useSelector((state) => state.notes.notes);
  const [searchTerm,setsearchTerm] = useState('');
  const dispatch = useDispatch();

  const filteredData = notes.filter(
    (note) => note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(noteId){
    dispatch(removeNotes(noteId));
  }

  return (
    //TEST CHANGE
    <div>
      <input className='p-2 mt-6 rounded-2xl min-w-150 mb-6 bg-gray-700'
      type='search'
      placeholder='search term'
      value={searchTerm}
      onChange={(e)=>setsearchTerm(e.target.value)}/>
      <div className='flex flex-col gap-6 mt-5'>
            {
              filteredData.length > 0 && 
              filteredData.map(
                (note) => {
                  return (
                    <div className='border bg-gray-700 p-6' 
                    key={note._id}
                    >{note.title}
                    <div className='m-5'>{note.content}</div>
                    <div className='flex flex-row gap-5 justify-evenly mt-4'>
                      <button ><a  href={`/?noteId=${note._id}`}>Edit</a></button>
                      <button onClick={() => handleDelete(note._id)}>Delete</button>
                      <button><a  href={`/notes/${note._id}`}>View</a></button>
                      <button onClick={() => navigator.clipboard.writeText(note.content)}>Copy</button>
                      <button /*logic-to-be-written*/>Share</button>  
                    </div>
                    <div className='mt-4'>{note.createdAt}</div>
                    </div>
                  )
                }
              )
            }
      </div>
    </div>
  )
}

export default Notes