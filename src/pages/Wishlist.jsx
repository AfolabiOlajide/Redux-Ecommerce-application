import React from 'react';
import { useSelector } from 'react-redux';

import { getWishlist, getWishlistState } from '../app/slices/wishlist';
import { getProducts } from '../app/slices/products';
import Product from '../components/product/Product';

const Wishlist = () => {
    const wishlist = useSelector(getWishlist);
    const wishlistIsAvailable = useSelector(getWishlistState);
    const products = useSelector(getProducts)

    // console.log(wishlist)

    return (
        <div>
            {!wishlistIsAvailable ? <h2 className='font-bold text-2xl text-gray-800 text-center'>You have not added an item to your wishlist</h2> : (
                <div className="grid grid-cols-2 gap-4 mt-8 lg:grid-cols-4">
                    {wishlist.map(item => {
                        let wishlistItem =  products.find(product => product.id === item);
                        return (
                            <Product key={wishlistItem.id} product={wishlistItem} />
                            // <div key={wishlist.id} className="product relative rounded-lg overflow-hidden border-2 border-gray-300 h-[30vh] shadow-lg shadow-gray-900/30">
                            //     {/* image */}
                            //     <Link to={`/product/${wishlistItem.id}`}>
                            //         <div className="h-[80%]">
                            //             <img src={wishlistItem.image} className='w-[100%] h-[100%] object-contain' alt="" />
                            //         </div>
                            //     </Link>
                            //     <div className="icons bg-gray-600 flex items-center space-x-3 px-3 h-[20%]">
                            //         <div className="price text-white font-bold">${wishlistItem.price}</div>
                            //         <BsSuitHeartFill className='text-white text-[1.5rem] cursor-pointer' onClick={() => dispatch(editWishlist(wishlistItem.id))}/>
                            //         <IoMdCart className='text-white text-[1.5rem] cursor-pointer'/>
                            //     </div>
                            // </div>
                        )
                    })}               
                </div>
                
            )}
        </div>
    )
}

export default Wishlist