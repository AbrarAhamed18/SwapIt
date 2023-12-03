import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import  authReducer from '../features/user/userSlice';
import productReducer from '../features/products/productSlice';
import contactReducer from '../features/contact/contactSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth:authReducer,
    product:productReducer,
    contact:contactReducer
  },
});
