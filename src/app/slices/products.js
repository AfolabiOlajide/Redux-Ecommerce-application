import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    categories: []
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
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products =  action?.payload;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories = action?.payload
            })
    }
});


export const getCategories = (state) => state.products.categories;
export const getProducts = (state) => state.products.products;
export default productsSlice.reducer;