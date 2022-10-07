import React from 'react';
import { BsSuitHeartFill } from 'react-icons/bs';
import { IoMdCart } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import { selectByCategory } from '../../app/slices/products';


const ByCategory = () => {
    let { category } = useParams();
    
    const products = useSelector( (state) => selectByCategory(state, category) )
    // console.log(products);

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
        <div>
            <h3 className="text-xl text-center font-semibold text-gray-800">{category}</h3>
            <div className="grid grid-cols-2 gap-4 mt-8 lg:grid-cols-4">
                {productList}                    
            </div>
        </div>
    )
}

export default ByCategory