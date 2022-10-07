import React from 'react';
import { useDispatch } from 'react-redux';
import { BsSuitHeartFill } from 'react-icons/bs'
import { IoMdCart } from 'react-icons/io'
import { Link } from 'react-router-dom'


import { editWishlist } from '../../app/slices/wishlist';

const Product = ({product}) => {
    const dispatch = useDispatch();

    return (
        <div className="product relative rounded-lg overflow-hidden border-2 border-gray-300 h-[30vh] shadow-lg shadow-gray-900/30">
            {/* image */}
            <Link to={`/product/${product.id}`}>
            <div className="h-[80%]">
                <img src={product.image} className='w-[100%] h-[100%] object-contain' alt="" />
            </div>
            </Link>
            <div className="icons bg-gray-600 flex items-center space-x-3 px-3 h-[20%]">
                <div className="price text-white font-bold">${product.price}</div>
                <BsSuitHeartFill className={`${ product.addedToWishlist ? "text-red-600" : "text-white"} text-[1.5rem] cursor-pointer`} onClick={() => dispatch(editWishlist(product.id))}/>
                <IoMdCart className={`${ product.addedToWishlist ? "text-red-600" : "text-white"} text-[1.5rem] cursor-pointer`}/>
            </div>
        </div>
    )
}

export default Product