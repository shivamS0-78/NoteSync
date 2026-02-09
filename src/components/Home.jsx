import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addNotes , updateNotes } from '../redux/notesSlice';

const Home = () => {

  const [title,setTitle] = useState('');
  const [searchParams , setSearchParams] = useSearchParams();
  const [value,setValue] = useState('');
  const noteId = searchParams.get("noteId");
  const dispatch = useDispatch();
  const allNotes= useSelector((state)=> state.notes.notes)

  useEffect(() => {
    if(noteId){
      const notes = allNotes.find((n)=>n._id === noteId);
      setTitle(notes.title);
      setTitle(notes.title);console.log(notes.title)
      setValue(notes.content);
    }
    }, [noteId])

  function createNotes(){
    const note = {
      title : title ,
      content : value ,
      _id : noteId || Date.now().toString(24),
      createdAt : new Date().toISOString()
    }

    if(noteId){
      //update
      dispatch(updateNotes(note));
    }
    else{
      //create
      dispatch(addNotes(note));
    }
    setTitle('');
    setValue('');
    setSearchParams({});
  }

  return (
    //updated it is
    <>
    <input className='border-blue p-4 rounded-2xl w-154 bg-gray-700'
       type='text'
       placeholder='enter title here' 
       value={title}
       onChange={(e)=> setTitle(e.target.value)}
    />
    <button className='m-2.5 h-14' onClick={createNotes}>
      {
        noteId ? "Update" : "Create" 
      }
    </button>
    <div>
      <textarea className='p-4 min-w-180 max-w-210 h-105 m-7 bg-gray-700 text-black text-2xl rounded-2xl'
       value={value}
       placeholder='Enter your content'
       onChange={(e)=>setValue(e.target.value)}
       rows={30}
       />
    </div>
    </>
  )
}

export default Home