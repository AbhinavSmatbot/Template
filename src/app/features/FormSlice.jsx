/* eslint-disable react-refresh/only-export-components */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
     form_Type: '',
     button_text:'',
     formData:[],
}

export const FormSlice = createSlice({
     name: 'form',
     initialState,
     reducers: {
          updateFormType: (state,action) => {
            state.form_Type = action.payload
          },
          upadateFormButtonText: (state,action)=>{
           state.button_text = action.payload
          },
          // upadateHeaderVar: (state,action)=>{
          //  state.header_var = action.payload
          // },
          // upadateHeaderMedia: (state,action)=>{
          //  state.header_media = action.payload
          // }
     },

})

export const { updateFormType,upadateFormButtonText } = FormSlice.actions

export default FormSlice.reducer