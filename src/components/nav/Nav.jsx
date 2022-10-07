import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsSearch, BsSuitHeartFill, BsGridFill } from "react-icons/bs";
import { IoMdCart } from 'react-icons/io';

import { setSideBarActive } from '../../app/slices/global';
import { getCartState } from '../../app/slices/carts';
import { getWishlistState } from '../../app/slices/wishlist';
import { Link } from 'react-router-dom';

const Nav = () => {
    const dispatch = useDispatch();
    const cartIsActive = useSelector(getCartState);
    const wishlistIsActive = useSelector(getWishlistState);

    return (
        <nav id='nav'>
            <div className="container mx-auto py-6 px-4 flex justify-between">
                {/* logo */}
                <div className="logo">
                    <h1 className='text-3xl text-gray-800 font-bold'>Fake.Store</h1>
                </div>
                {/* Items */}
                <div className="flex space-x-4 items-center">
                    <form className='hidden md:flex space-x-2 items-center'>
                        <input 
                        type="text" 
                        placeholder='Search Items'
                        className='px-4 py-2 outline-0 focus:ring-purple-300 focus:ring-2 rounded-md'
                        />
                        <div className="button rounded-full p-2 cursor-pointer transition-all duration-300 ease-in hover:bg-purple-300 ">
                            <BsSearch />
                        </div>
                    </form>
                    <span className='hidden w-1 bg-gray-800 rounded-md h-6 md:block'></span>
                    {/* store icons */}
                    <div className="flex space-x-4">
                        <Link to="/wishlist">
                            <div className="icon relative">
                                <BsSuitHeartFill className='text-gray-800 text-[1.5rem] cursor-pointer'/>
                                { wishlistIsActive &&  <span className='absolute -top-1 -right-1 bg-red-500 w-3 h-3 rounded-full text-[.5rem] shadow-md shadow-red-600'></span> }
                                
                            </div>
                        </Link>
                        <Link to="/cart" >
                            <div className="icon relative">
                                <IoMdCart className='text-gray-800 text-[1.5rem] cursor-pointer'/>
                                { cartIsActive && <span className='absolute -top-1 -right-1 bg-red-500 w-3 h-3 rounded-full text-[.5rem] shadow-md shadow-red-600'></span> }
                                
                            </div>
                        </Link>
                        {/* Hamburger Menu */}
                        <div className="hamburger block md:hidden">
                            <BsGridFill className='text-gray-800 text-[1.5rem] cursor-pointer' onClick={() => dispatch(setSideBarActive())}/>
                        </div>
                    </div>
                </div>
                
            </div>
        </nav>
    )
}

export default Nav