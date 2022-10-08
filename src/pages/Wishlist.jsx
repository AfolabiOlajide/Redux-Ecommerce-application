import React from 'react';
import { useSelector } from 'react-redux';

import { getWishlist, getWishlistState } from '../app/slices/wishlist';
import { getProducts } from '../app/slices/products';
import Product from '../components/product/Product';

const Wishlist = () => {
    const wishlist = useSelector(getWishlist);
    const wishlistIsAvailable = useSelector(getWishlistState);
    const products = useSelector(getProducts);

    return (
        <div>
            {!wishlistIsAvailable ? <h2 className='font-bold text-2xl text-gray-800 text-center'>You have not added an item to your wishlist</h2> : (
                <div className="grid grid-cols-2 gap-4 mt-8 lg:grid-cols-4">
                    {wishlist.map(item => {
                        let wishlistItem =  products.find(product => product.id === item);
                        return (
                            <Product key={wishlistItem.id} product={wishlistItem} />
                        )
                    })}               
                </div>
                
            )}
        </div>
    )
}

export default Wishlist