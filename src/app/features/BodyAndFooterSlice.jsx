import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  body_text: '',
  body_param: [],
  footer_text: '',
}

export const BodyAndFooterSlice = createSlice({
  name: 'body',
  initialState,
  reducers: {
    updateBodyText: (state,action) => {
      state.body_text = action.payload;
    },
    updateBodyParam:(state,action)=>{
      state.body_param = action.payload;
    },
    updateFooterText:(state,action)=>{
      state.footer_text = action.payload;
    },
  }
})

// Action creators are generated for each case reducer function
// eslint-disable-next-line react-refresh/only-export-components, no-undef
export const { updateBodyText,updateBodyParam,updateFooterText} = BodyAndFooterSlice.actions

// eslint-disable-next-line no-undef
export default BodyAndFooterSlice.reducer