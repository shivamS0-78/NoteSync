import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    notes : localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : []
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNotes : (state,action) =>{
      const note = action.payload;
      state.notes.push(note);
      localStorage.setItem("notes",JSON.stringify(state.notes));
      //additional feature toast(future)
    },  
    updateNotes : (state,action) =>{
      const note = action.payload;
      const index = state.notes.findIndex((item)=> item._id === note._id);

      if(index >=0 ){
        state.notes[index] = note;

        localStorage.setItem("notes",JSON.stringify(state.notes));
      }
    },
    resetAllNotes : (state,action) =>{
      state.notes = [];
      localStorage.removeItem("notes");
    },
    removeNotes : (state,action) =>{
      const noteId = action.payload ;
      console.log(noteId);
      const index = state.notes.findIndex((item)=>
      item._id === noteId);

      if(index >=0 ){
        state.notes.splice(index,1);

        localStorage.setItem("notes" , JSON.stringify(state.notes))
      }
    }
  },
})

export const {addNotes , updateNotes , resetAllNotes , removeNotes } = notesSlice.actions
export default notesSlice.reducer