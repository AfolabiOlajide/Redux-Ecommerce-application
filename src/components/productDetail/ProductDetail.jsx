import React from 'react';
import { BsSuitHeartFill } from 'react-icons/bs';
import { IoMdCart } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { selectProductById, selectByCategory } from '../../app/slices/products';


const ProductDetail = () => {
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
        <Link to={`/product/${product.id}`} key={product.id}>
            <div className="product relative rounded-lg overflow-hidden border-2 border-gray-300 h-[30vh] shadow-lg shadow-gray-900/30">
                {/* image */}
                <div className="h-[80%]">
                <img src={product.image} className='w-[100%] h-[100%] object-contain' alt="" />
                </div>
                <div className="icons bg-gray-600 flex items-center space-x-3 px-3 h-[20%]">
                    <div className="price text-white font-bold">${product.price}</div>
                    <BsSuitHeartFill className='text-white text-[1.5rem] cursor-pointer'/>
                    <IoMdCart className='text-white text-[1.5rem] cursor-pointer'/>
                </div>
            </div>
        </Link>
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
                            hover:ring-cyan-300 '>Add to Cart</button>
            <button className='py-4 px-2 bg-cyan-600 cursor-pointer text-white rounded-md shadow-lg shadow-cyan-400 hover:ring-4 
                            hover:ring-cyan-300 '>Add to wishlist</button>
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