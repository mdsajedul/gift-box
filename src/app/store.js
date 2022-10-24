import { configureStore } from '@reduxjs/toolkit';
import cartSliceReducer from '../features/cart/cartSlice';
import productsSliceReducer from '../features/products/productsSlice';

export const store = configureStore({
  reducer: {
    products: productsSliceReducer,
    cart: cartSliceReducer
  },
});
