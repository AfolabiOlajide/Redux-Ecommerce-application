import React from 'react';
import CartItem from '../components/cartItem/CartItem';
import { useSelector } from 'react-redux';

import { getCartItems, getCartTotalPrice, getCartState } from '../app/slices/carts';

const Cart = () => {
    // const dispatch = useDispatch();
    const totalPrice = useSelector(getCartTotalPrice);
    const cartItems = useSelector(getCartItems);
    const cartState = useSelector(getCartState);

    let content;

    if(cartState){
        content = cartItems.map(cartItem => {
            return <CartItem key={cartItem.id} cart={cartItem} />
        })
    }else{
        content = <h1 className='font-semibold text-lg text-center text-gray-700'>Add an Item to the Cart</h1>
    }

    return (
        <div>
            {/* Cart-header */}
            <div className="cart-header p-3 flex justify-between mb-12 bg-gray-800 text-white rounded-lg shadow-lg shadow-gray-500 sticky top-0">
                <div className="text-[0.7rem] font-semibold md:text-[1.2rem]">Available Cart Item: {cartItems.length}</div>
                <div className="text-[0.7rem] font-semibold md:text-[1.2rem]">Total Amount: ${totalPrice.toFixed(2)}</div>
            </div>
            {/* cart List */}
            { content }
        </div>
    )
}

export default Cart