import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from './slices/products';
import CartReducer from "./slices/carts";

export const store = configureStore({
    reducer: {
        products: ProductsReducer,
        cart: CartReducer
    }
});