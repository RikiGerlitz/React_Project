import { configureStore } from '@reduxjs/toolkit'
import basketSlice from '../featurs/basket/basketSlice'
import productsSlice from '../featurs/products/productsSlice'
import userSlice from '../featurs/user/userSlice'




export const store = configureStore({
  reducer: {
      product :productsSlice,
      user:userSlice,
      basket:basketSlice,
      
    
      
     
  },
})