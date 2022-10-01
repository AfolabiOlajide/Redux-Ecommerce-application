import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
}

const PRODUCT_URL = "https://fakestoreapi.com/products"

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    try {
        const response = await axios.get(PRODUCT_URL);
        return response.data;
    } catch (error) {
        return error.message;
    }
});

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers(builder){
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products =  state.products.concat(action.payload);
        })
    }
});

export const getProducts = (state) => state.products;
export default productsSlice.reducer;