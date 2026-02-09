import React from 'react'
import { useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';

const ViewNotes = () => {
  const {id} = useParams();
  const allNotes= useSelector((state)=> state.notes.notes);
  console.log(allNotes);
  const notes = allNotes.find((n)=>n._id === id);

  return (
    <>
      <input className='border-blue p-4 rounded-2xl w-154 bg-gray-700'
       type='text'
       placeholder='enter title here' 
       value={notes.title}
       disabled={true} 
    />
    {/* <button className='m-2.5 h-14' onClick={createNotes}>
      {
        noteId ? "Update" : "Create" 
      }
    </button> */}
    <div>
      <textarea className='p-4 min-w-180 max-w-210 h-105 m-7 bg-gray-700 text-black text-2xl rounded-2xl'
       placeholder='Enter your content'
       value={notes.content}
       rows={30}
       disabled
       />
    </div>
    </>
  )
}

export default ViewNotes