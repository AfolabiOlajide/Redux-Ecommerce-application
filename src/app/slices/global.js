import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sideBarActive: false
}

const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setSideBarActive (state, action) {
            if(state.sideBarActive === true){
                state.sideBarActive = false;
            }else{
                state.sideBarActive = true
            }
        }
    }
});

export const getSideBarState = (state) => state.global.sideBarActive;
export const { setSideBarActive } = globalSlice.actions;

export default globalSlice.reducer;