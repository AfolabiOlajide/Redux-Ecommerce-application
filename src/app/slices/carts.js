import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./products";

const initialState = {
    cartsList: [],
    cartIsAvailable: false,
    totalCartsPrice: 0
}

const cartsSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCartIsAvailable (state, action) {
            state.cartIsAvailable = action.payload;
        }, 
        addItemToCart (state, action) {
            const isItemInCart = state.cartsList.find(item => item.id === action.payload)
            if(Boolean(isItemInCart)){
                const updatedCartsList = state.cartsList.filter(cartItem => cartItem.id !== action.payload);
                state.cartsList = updatedCartsList;
            }else{
                const cartFromProduct = getProducts.find(product => product.id === action.payload )
                let cartItem = {
                    id: action.payload,
                    amount: 1,
                    totalPrice: cartFromProduct.price
                }
                state.cartsList.push(cartItem);
            }
        }
    }
});

export const getCartState = (state) => state.cart.cartIsAvailable;

export const { setCartIsAvailable } = cartsSlice.actions;
export default cartsSlice.reducer;