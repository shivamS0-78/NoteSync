import React, { useState } from 'react'
import { useDispatch ,useSelector } from 'react-redux';
import { addTodo, removeNotes } from '../redux/todosSlice';

const Todo = () => {
  
  const todos = useSelector((state) => state.todos.todos);
  const[todoTitle,settodoTitle] = useState('');
  const dispatch = useDispatch();

  function createTodos(){
    const todo = {
      title : todoTitle ,
      _id : Date.now().toString(24),
    }
     //create
    dispatch(addTodo(todo));
    settodoTitle('');   
    }   
  
   function handleDelete(todoId){
    dispatch(removeNotes(todoId));
   }
  return (
    <>
    <div>
        <input
         className='border-blue p-4 rounded-2xl w-154 bg-gray-700'
         type="text"
         placeholder='enter the todo'
         value={todoTitle}
         onChange={(e)=> settodoTitle(e.target.value)
         }
        />
        <button 
        className='m-2.5 h-14 w-18'
        onClick={createTodos}>+</button>
    </div>
    <div className='flex flex-col gap-6 mt-5'>
            {
               todos.length > 0 && 
               todos.map(
                (todo) => {
                  return (
                    <div className='border bg-gray-700 p-6' 
                    key={todo._id}
                    >{todo.title}
                    <div className='flex flex-row gap-5 justify-evenly mt-4'>
                      <button onClick={() => handleDelete(todo._id)}>Delete</button>  
                    </div>
                    </div>
                  )
                }
              )
            }
      </div>
    </>
  )
}

export default Todo