import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from './slices/products';
import CartReducer from "./slices/carts";
import GlobalReducer from "./slices/global"

export const store = configureStore({
    reducer: {
        products: ProductsReducer,
        cart: CartReducer,
        global: GlobalReducer
    }
});