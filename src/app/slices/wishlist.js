import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    wishlistIsAvailable: false,
    wishlistList: []
}



const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        setWishlistIsAvailable (state, action){
            state.wishlistIsAvailable = action.payload
        },
        editWishlist(state, action){
            if(state.wishlistList.length === 0){
                state.wishlistIsAvailable = true
                state.wishlistList.push(action.payload)
            }else if(state.wishlistList.length === 1 && state.wishlistList.includes(action.payload)){
                state.wishlistIsAvailable = false;
                state.wishlistList = []
            }else if(state.wishlistList.includes(action.payload)){
                const updatedWishlist = state.wishlistList.filter(id => action.payload !== id);
                state.wishlistList = updatedWishlist;
            }else{
                state.wishlistList.push(action.payload)
            }
            
            // else{
            //     if(!state.wishlistList.find(id => id === action.payload.id)){
            //         state.wishlistList.push(action.payload);
            //     }else if (state.wishlistList.find(id => id === action.payload.id) && state.wishlistList.length === 1){
            //         state.wishlistIsAvailable = false;
            //         state.wishlistList = [];
            //     }else{
                    
            //     }
            // }
        }
    }
});


export const getWishlistState = (state) => state.wishlist.wishlistIsAvailable;
export const getWishlist = (state) => state.wishlist.wishlistList;

export const { setWishlistIsAvailable, editWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;