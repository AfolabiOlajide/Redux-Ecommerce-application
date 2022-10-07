import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Route, Routes } from 'react-router-dom';
import { GoHome } from "react-icons/go"
import { BsFillGrid1X2Fill } from 'react-icons/bs';
import { BiShoppingBag } from 'react-icons/bi';
import { FaQuestion } from "react-icons/fa";
import { GrConnect } from 'react-icons/gr';

import Home from '../../pages/Home';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import FAQ from '../../pages/FAQ';
import Shop from '../../pages/Shop';
import Cart from '../../pages/Cart';
import Wishlist from '../../pages/Wishlist'
// import OutletContainer from '../../pages/OutletContainer';
import { getSideBarState } from '../../app/slices/global';
import ProductDetail from '../productDetail/ProductDetail';
import ByCategory from '../category/ByCategory';
import ScrollToTop from '../scrollToTop/ScrollToTop';

const Layout = () => {
    const sideBarActiveState = useSelector(getSideBarState);

    return (
        <main className='grid grid-cols-12 px-2 md:px-12'>
            {/* SideBar */}
            <aside className={`${sideBarActiveState ? 'col-span-2 flex-col justify-center' : 'hidden'} md:col-span-2 pt-12 flex-col space-y-6 md:flex`}>
                <NavLink to="/home">
                    {({ isActive }) => (
                        <div className={`sidebar-link flex space-x-4 items-center ${ isActive ? 'bg-white' : undefined} p-4 rounded-l-2xl cursor-pointer md:hover:pl-8
                                    transition-all duration-300 ease-in-out`}>
                            <GoHome className='text-gray-800 text-[1.5rem]' />
                            <h3 className='hidden font-bold text-gray-800 md:block'>Home</h3>
                        </div>
                    )}
                    
                </NavLink>
                <NavLink to="/about">
                    {({ isActive }) => (
                        <div className={`sidebar-link flex space-x-4 items-center ${ isActive ? 'bg-white' : undefined} p-4 rounded-l-2xl cursor-pointer md:hover:pl-8
                                    transition-all duration-300 ease-in-out`}>
                            <BsFillGrid1X2Fill className='text-gray-800 text-[1.5rem]' />
                            <h3 className='hidden font-bold text-gray-800 md:block'>About</h3>
                        </div>
                    )}
                    
                </NavLink>
                <NavLink to="/shop">
                    {({isActive}) => (
                        <div className={`sidebar-link flex space-x-4 items-center ${ isActive ? 'bg-white' : undefined} p-4 rounded-l-2xl cursor-pointer md:hover:pl-8
                        transition-all duration-300 ease-in-out`}>
                            <BiShoppingBag className='text-gray-800 text-[1.5rem]' />
                            <h3 className='hidden font-bold text-gray-800 md:block'>Shop</h3>
                        </div>
                    )}
                    
                </NavLink>
                <NavLink to="/faq">
                    {({isActive}) => (
                        <div className={`sidebar-link flex space-x-4 items-center ${ isActive ? 'bg-white' : undefined} p-4 rounded-l-2xl cursor-pointer md:hover:pl-8
                                    transition-all duration-300 ease-in-out`}>
                            <FaQuestion className='text-gray-800 text-[1.5rem]' />
                            <h3 className='hidden font-bold text-gray-800 md:block'>FAQ</h3>
                        </div>
                    )}
                    
                </NavLink>
                <NavLink to="/contact">
                    {({isActive}) => (
                        <div className={`sidebar-link flex space-x-4 items-center ${ isActive ? 'bg-white' : undefined} p-4 rounded-l-2xl cursor-pointer md:hover:pl-8
                                    transition-all duration-300 ease-in-out`}>
                            <GrConnect className='text-gray-800 text-[1.5rem]' />
                            <h3 className='hidden font-bold text-gray-800 md:block'>Contact</h3>
                        </div>
                    )}
                    
                </NavLink>
            </aside>
            {/* main output */}
            <section id='main-output' className={`bg-white h-[85vh] p-3 overflow-y-auto overflow-x-auto rounded-3xl ${sideBarActiveState ? 'col-span-10' : 'col-span-full'} md:col-span-10 md:h-[80vh] md:p-12 `}>
                <ScrollToTop>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/shop' element={<Shop />} />
                        <Route path='/shop/:category' element={<ByCategory />} />                    
                        <Route path='/about' element={<About />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/faq' element={<FAQ />} />                    
                        <Route path='/cart' element={<Cart />} />                    
                        <Route path='/wishlist' element={<Wishlist />} />                    
                        <Route path='/product/:productId' element={<ProductDetail />} />   
                    </Routes>
                </ScrollToTop>                 
            </section>
        </main>
    )
}

export default Layout