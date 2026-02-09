import { configureStore } from '@reduxjs/toolkit'
import notesReducer from '../src/redux/notesSlice' 

export const store = configureStore({
  reducer: {
    notes : notesReducer 
    },
})
