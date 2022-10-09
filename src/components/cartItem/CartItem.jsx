import React from 'react';
import { useDispatch } from 'react-redux';
import { MdOutlineClose } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

import { addItemToCart, decreaseCartItem, increaseCartItem } from '../../app/slices/carts';
import { productCartState } from '../../app/slices/products';


const CartItem = ({cart}) => {
    const dispatch = useDispatch();
    // const products = useSelector(getCartItems);

    // const product = products.find(product => product.id === cart.id);

    const addRemoveCartHandler = () => {
        dispatch(addItemToCart({ id: cart.id }))
        dispatch(productCartState(cart.id))

    }


    return (
        <div className='flex justify-between items-center h-[20vh] bg-slate-200 p-3 mb-3 rounded-lg shadow-md shadow-gray-300'>
            <div className="image h-[100%] flex space-x-3 items-center">
                <div className="">
                    <MdOutlineClose className='text-2xl cursor-pointer text-gray-700 hover:bg-slate-300 rounded-full md:text-4xl' onClick={addRemoveCartHandler}/>
                </div>
                <img className='object-contain w-[70%] h-[100%]' src={cart.image} alt="" />
            </div>
            {/* functions */}
            <div className="flex flex-col space-y-3">
                <div className="flex space-x-4 items-center">
                    { cart.amount === 1 ? "" : (<AiOutlineMinus className={`text-2xl bg-slate-300 cursor-pointer text-gray-700 rounded-full md:text-4xl `} onClick={() => dispatch(decreaseCartItem({id: cart.id}))}/>) }
                    
                    <span className='text-xl font-bold md:text-2xl'>{cart.amount}</span>
                    <AiOutlinePlus className='text-2xl bg-slate-300 cursor-pointer text-gray-700 rounded-full md:text-4xl' onClick={() => dispatch(increaseCartItem({id: cart.id}))}/>
                </div>
                <div className="text-center font-bold text-gray-700 text-lg">
                    <span>{cart.totalPrice}</span>
                </div>
            </div>
        </div>
    )
}

export default CartItem