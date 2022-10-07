import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartIsAvailable: false,
    totalCartsPrice: 0
}

const cartsSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCartIsAvailable (state, action) {
            state.cartIsAvailable = action.payload;
        }
    }
});

export const getCartState = (state) => state.cart.cartIsAvailable;

export const { setCartIsAvailable } = cartsSlice.actions;
export default cartsSlice.reducer;