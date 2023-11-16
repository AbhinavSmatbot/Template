import { configureStore } from '@reduxjs/toolkit'
import HomeSlice from './features/HomeSlice'
import HeaderSlice from './features/HeaderSlice'
import BodyAndFooterSlice from './features/BodyAndFooterSlice'

export const store = configureStore({
  reducer: {
     home:HomeSlice,
     header:HeaderSlice,
     body:BodyAndFooterSlice,
  }

})