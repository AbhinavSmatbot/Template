import { createSlice } from '@reduxjs/toolkit'

const initialState = {
     header_Type: '',
     header_text:'',
     header_var:[],
     header_media:[],
}

export const HeaderSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    updateHeaderType: (state,action) => {
      state.header_Type = action.payload
    },
    upadateHeaderText: (state,action)=>{
     state.header_text = action.payload
    },
    upadateHeaderVar: (state,action)=>{
     state.header_var = action.payload
    },
    upadateHeaderMedia: (state,action)=>{
     state.header_media = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
// eslint-disable-next-line react-refresh/only-export-components, no-undef
export const { updateHeaderType,upadateHeaderText,upadateHeaderVar,upadateHeaderMedia } = HeaderSlice.actions

// eslint-disable-next-line no-undef
export default HeaderSlice.reducer