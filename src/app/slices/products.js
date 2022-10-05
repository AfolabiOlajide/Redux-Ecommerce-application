import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    categories: [],
    error: true
}

const PRODUCT_URL = "https://fakestoreapi.com/products";
const CATEGORIES_URL = "https://fakestoreapi.com/products/categories";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    try {
        const response = await axios.get(PRODUCT_URL);
        return response.data;
    } catch (error) {
        return error.message;
    }
});

export const fetchCategories = createAsyncThunk("products/fetchCategories", async () => {
    try {
        const response = await axios.get(CATEGORIES_URL);
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
        builder
            .addCase(fetchProducts.rejected, (state, action) => {
                state.categories = []
                state.error = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.error = false;
                state.products =  action?.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) =>{
                state.error = true;
                state.categories = []
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.error = false;
                state.categories = action?.payload
            })
    }
});

export const getErrorStatus = (state) => state.products.error;
export const getCategories = (state) => state.products.categories;
export const getProducts = (state) => state.products.products;
export default productsSlice.reducer;