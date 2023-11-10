import { createSlice } from '@reduxjs/toolkit'

const initialState = {
     cateory: '',
     template_name:'',
     languages:[],
}

export const HomeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    updateCategory: (state,action) => {
      state.cateory = action.payload
    },
    upadateTemName: (state,action)=>{
     state.template_name = action.payload
    },
    upadateLanguage: (state,action)=>{
     state.languages = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
// eslint-disable-next-line react-refresh/only-export-components
export const { updateCategory,upadateTemName,upadateLanguage } = HomeSlice.actions

export default HomeSlice.reducer