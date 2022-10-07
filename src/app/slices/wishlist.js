import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    wishlistIsAvailable: false,
}



const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        setWishlistIsAvailable (state, action){
            state.wishlistIsAvailable = action.payload
        }
    }
});


export const getWishlistState = (state) => state.wishlist.wishlistIsAvailable;

export const { setWishlistIsAvailable } = wishlistSlice.actions;
export default wishlistSlice.reducer;