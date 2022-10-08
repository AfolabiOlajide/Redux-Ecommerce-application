import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectProductById, selectByCategory } from '../../app/slices/products';
import { editWishlist } from '../../app/slices/wishlist';
import { productWishlistState } from '../../app/slices/products';
import Product from '../product/Product';


const ProductDetail = () => {
    const dispatch = useDispatch()
    
    const editWishlistHandler = (id) => {
        dispatch(editWishlist(id));
        dispatch(productWishlistState(id));
    }

    const {productId} = useParams();

    const product = useSelector((state) => selectProductById(state, Number(productId)));
    const products = useSelector( (state) => selectByCategory(state, product.category) )

    if(!product){
        return(
            <div className="text-center p-6">
                <h5 className="font-semibold text-slate-500">Product Not found</h5>
            </div>
        )
    }

    const productList = products.map(product => (
        <Product key={product.id} product={product} />
    ))

    return (
        <div className='m-3'>
            {/* Product Image */}
            <div className="w-full h-[30vh]">
                <img src={product.image} alt="" className='object-contain w-full h-full' />
            </div>
            {/* Product Details */}
            <h4 className='text-gray-700 text-xl font-semibold mt-5'>${product.price}</h4>
            <h3 className="font-bold text-gray-800 text-2xl my-6">{product.title}</h3>
            <p className="font-semibold text-xl text-slate-600">{product.description}</p>
            <div className="cta flex space-x-4 items-center mt-5">
            <button className='py-4 px-2 bg-cyan-600 cursor-pointer text-white rounded-md shadow-lg shadow-cyan-400 hover:ring-4 
                            hover:ring-cyan-300 '>{ product.addedToCart ? "Remove From cart" : "Add to Cart"  }</button>
            <button className='py-4 px-2 bg-cyan-600 cursor-pointer text-white rounded-md shadow-lg shadow-cyan-400 hover:ring-4 
                            hover:ring-cyan-300 ' onClick={() => editWishlistHandler(product.id)}>{ product.addedToWishlist ? "Remove from wishlist" : "Add to wishlist" }</button>
            </div>
            {/* Similar products */}
            <div className="">
                <h4 className='text-gray-700 text-xl font-bold mt-12'>Similar Products</h4>
                <div className="grid grid-cols-2 gap-4 mt-8 lg:grid-cols-4">
                    { productList }
                </div>
            </div>
        </div>
    )
}

export default ProductDetail