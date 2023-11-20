import { createSlice } from '@reduxjs/toolkit'

const initialState = {
     button_Types: '',
     // header_text:'',
     button_array:[],
     // header_media:[],
}

export const ButtonsSlice = createSlice({
  name: 'button',
  initialState,
  reducers: {
    updateButtonType: (state,action) => {
      state.button_Types = action.payload
    },
    upadateButtonArray: (state,action)=>{
     state.button_array = action.payload
    },
//     upadateHeaderVar: (state,action)=>{
//      state.header_var = action.payload
//     },
//     upadateHeaderMedia: (state,action)=>{
//      state.header_media = action.payload
//     }
  },
})

// Action creators are generated for each case reducer function
// eslint-disable-next-line react-refresh/only-export-components, no-undef
export const { updateButtonType,upadateButtonArray } = ButtonsSlice.actions

// eslint-disable-next-line no-undef
export default ButtonsSlice.reducer