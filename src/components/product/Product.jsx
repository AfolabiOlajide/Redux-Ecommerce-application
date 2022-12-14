import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsSuitHeartFill } from 'react-icons/bs'
import { IoMdCart } from 'react-icons/io'
import { Link } from 'react-router-dom'


import { editWishlist } from '../../app/slices/wishlist';
import { productWishlistState, productCartState } from '../../app/slices/products';
import { addItemToCart } from '../../app/slices/carts';
// import { getCartItems } from '../../app/slices/carts';
import { getProducts } from '../../app/slices/products';

const Product = ({product}) => {
    const dispatch = useDispatch();
    const products = useSelector(getProducts);

    const productItem = products.find(prod => prod.id === product.id);

    const editWishlistHandler = (id) => {
        dispatch(editWishlist(id));
        dispatch(productWishlistState(id));
    }

    const editCartsHandler = (id) => {
        dispatch(addItemToCart({id: id, image: productItem.image, price: productItem.price}));
        dispatch(productCartState(id));
    }

    return (
        <div className="product relative rounded-lg overflow-hidden border-2 border-gray-300 h-[30vh] shadow-lg shadow-gray-900/30">
            {/* image */}
            <Link to={`/product/${product.id}`}>
            <div className="h-[70%]">
                <img src={product.image} className='w-[100%] h-[100%] object-contain' alt="" />
            </div>
            </Link>
            <div className="h-[10%] bg-gray-600 text-white px-3">
                <span className='text-[0.7rem] md:text-[.85rem]'>{product.title.substring(0, 15)}...</span>
            </div>
            <div className="icons bg-gray-600 flex items-center space-x-3 px-3 h-[20%]">
                <div className="price text-white font-bold">${product.price}</div>
                <BsSuitHeartFill className={`${ product.addedToWishlist ? "text-red-500" : "text-white"} text-[1.5rem] cursor-pointer`} onClick={() => editWishlistHandler(product.id)}/>
                <IoMdCart className={`${ product.addedToCart ? "text-red-500" : "text-white"} text-[1.5rem] cursor-pointer`} onClick={() => editCartsHandler(product.id)}/>
            </div>
        </div>
    )
}

export default Product