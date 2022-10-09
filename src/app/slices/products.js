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
        console.log(error.message);
    }
});

export const fetchCategories = createAsyncThunk("products/fetchCategories", async () => {
    try {
        const response = await axios.get(CATEGORIES_URL);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
});

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        productWishlistState (state, action) {
            const updatedProducts = state.products.map(product => {
                if(product.id !== action.payload){
                    return product;
                }else{
                    if(product.addedToWishlist){
                        product.addedToWishlist = false;
                    }else{
                        product.addedToWishlist = true;
                    }
                    return product;
                }
            });
            state.products = updatedProducts;
        },
        productCartState (state, action) {
            const updatedProducts = state.products.map(product => {
                if(product.id !== action.payload){
                    return product;
                }else{
                    if(product.addedToCart){
                        product.addedToCart = false;
                    }else{
                        product.addedToCart = true;
                    }
                    return product;
                }
            });
            state.products = updatedProducts;
        }
    },
    extraReducers(builder){
        builder
            .addCase(fetchProducts.rejected, (state, action) => {
                state.categories = []
                state.error = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.error = false;
                const loadedData = action.payload.map(product => {
                    product.addedToCart = false;
                    product.addedToWishlist = false;

                    return product;
            })
                state.products =  loadedData;
            })
            .addCase(fetchCategories.rejected, (state, action) =>{
                if(!action.payload){
                    return
                }
                state.error = true;
                state.categories = []
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                if(!action.payload){
                    return
                }
                state.error = false;
                state.categories = action?.payload
            })
    }
});

export const getErrorStatus = (state) => state.products.error;
export const getCategories = (state) => state.products.categories;
export const getProducts = (state) => state.products.products;
export const selectProductById = (state, productId) => state.products.products.find( product => productId === product.id );
export const selectByCategory = (state, category) => state.products.products.filter(product => category === product.category );

export const products = initialState.products;

export const { productWishlistState, productCartState } = productsSlice.actions;
export default productsSlice.reducer;