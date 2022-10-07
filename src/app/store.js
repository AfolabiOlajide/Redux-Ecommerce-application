import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from './slices/products';
import CartReducer from "./slices/carts";
import GlobalReducer from "./slices/global"
import WishlistReducer from "./slices/wishlist"

export const store = configureStore({
    reducer: {
        products: ProductsReducer,
        cart: CartReducer,
        global: GlobalReducer,
        wishlist: WishlistReducer
    }
});