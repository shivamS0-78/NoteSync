import { configureStore } from '@reduxjs/toolkit'
import notesReducer from '../src/redux/notesSlice' 
import todoReducer from '../src/redux/todosSlice'

export const store = configureStore({
  reducer: {
    notes : notesReducer ,
    todos : todoReducer
    },
})
