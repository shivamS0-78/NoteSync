import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos : localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : []
}
export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo : (state,action) =>{
      const todo = action.payload;
      state.todos.push(todo);
      localStorage.setItem("todos",JSON.stringify(state.todos));
      //additional feature toast(future)
    },
    removeNotes : (state,action) =>{
      const todoId = action.payload ;
      const index = state.todos.findIndex((item)=>
      item._id === todoId);

      if(index >=0 ){
        state.todos.splice(index,1);

        localStorage.setItem("todos" , JSON.stringify(state.todos))
      }
    }
  },
})
export const {addTodo,removeNotes} = todosSlice.actions
export default todosSlice.reducer