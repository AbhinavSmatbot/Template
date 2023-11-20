import { createSlice } from '@reduxjs/toolkit'

const initialState = {
     button_Types: '',
     // header_text:'',
     quickReplaybutton_array:[],
     callToactionbutton_array:[],
     // header_media:[],
}

export const ButtonsSlice = createSlice({
  name: 'button',
  initialState,
  reducers: {
    updateButtonType: (state,action) => {
      state.button_Types = action.payload
    },
    upadateQuickButton_arr: (state,action)=>{
     state.quickReplaybutton_array = action.payload
    },
    upadateToActionsButton_arr: (state,action)=>{
     state.callToactionbutton_array = action.payload
    },
//     upadateHeaderMedia: (state,action)=>{
//      state.header_media = action.payload
//     }
  },
})

// Action creators are generated for each case reducer function
// eslint-disable-next-line react-refresh/only-export-components, no-undef
export const { updateButtonType,upadateQuickButton_arr,upadateToActionsButton_arr } = ButtonsSlice.actions

// eslint-disable-next-line no-undef
export default ButtonsSlice.reducer