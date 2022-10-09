import { createSlice } from "@reduxjs/toolkit";

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
            const isItemInCart = state.cartsList.find(item => item.id === action.payload.id)
            if(Boolean(isItemInCart)){
                if(state.cartsList.length === 1){
                    state.totalCartsPrice = 0;
                    state.cartsList = [];
                    state.cartIsAvailable = false;
                }else{
                    const cartItem = state.cartsList.find(item => item.id === action.payload.id)
                    state.totalCartsPrice = state.totalCartsPrice - cartItem.totalPrice;
                    // 
                    const updatedCartsList = state.cartsList.filter(cartItem => cartItem.id !== action.payload.id);
                    state.cartsList = updatedCartsList;
                    // state.cartIsAvailable = true;
                }
                
            }else{
                if(state.cartsList === 0){
                    state.cartIsAvailable = true;
                    let cartItem = {
                        id: action.payload.id,
                        image: action.payload.image,
                        amount: 1,
                        itemPrice: action.payload.price,
                        totalPrice: action.payload.price
                    }
                    state.cartsList.push(cartItem);
                    state.totalCartsPrice = state.totalCartsPrice + action.payload.price;
                }else{
                    state.cartIsAvailable = true;
                    let cartItem = {
                        id: action.payload.id,
                        image: action.payload.image,
                        amount: 1,
                        itemPrice: action.payload.price,
                        totalPrice: action.payload.price
                    }
                    state.cartsList.push(cartItem);
                    state.totalCartsPrice = state.totalCartsPrice + action.payload.price;
                }
            }
        },
        increaseCartItem (state, action) {
            const updatedCart = state.cartsList.map(cart => {
                if(cart.id !== action.payload.id){
                    return cart;
                }
                cart.amount = cart.amount + 1;
                cart.totalPrice = cart.itemPrice * cart.amount;
                state.totalCartsPrice = state.totalCartsPrice + cart.itemPrice;
                return cart;
            });
            state.cartsList = updatedCart;
        },
        decreaseCartItem (state, action) {
            const updatedCart = state.cartsList.map(cart => {
                if(cart.id !== action.payload.id){
                    return cart;
                }
                cart.amount = cart.amount - 1;
                cart.totalPrice = cart.itemPrice * cart.amount;
                state.totalCartsPrice = state.totalCartsPrice - cart.itemPrice
                return cart;
            });
            state.cartsList = updatedCart;
        }
    }
});

export const getCartState = (state) => state.cart.cartIsAvailable;
export const getCartItems = (state) => state.cart.cartsList;
export const getCartTotalPrice = (state) => state.cart.totalCartsPrice;

export const { setCartIsAvailable, addItemToCart, decreaseCartItem, increaseCartItem } = cartsSlice.actions;
export default cartsSlice.reducer;