import React from 'react';
import { Link } from 'react-router-dom';
import { GoHome } from "react-icons/go"
import { BsFillGrid1X2Fill } from 'react-icons/bs';
import { BiShoppingBag } from 'react-icons/bi';
import { FaQuestion } from "react-icons/fa";
import { GrConnect } from 'react-icons/gr'

const Layout = () => {
    return (
        <main className='grid grid-cols-12 px-2 md:px-12'>
            {/* SideBar */}
            <aside className='col-span-2 pt-12 flex flex-col space-y-6'>
                <Link to="/home">
                    <div className="sidebar-link flex space-x-4 items-center bg-white p-4 rounded-l-2xl cursor-pointer md:hover:pl-8
                                    transition-all duration-300 ease-in-out">
                        <GoHome className='text-gray-800 text-[1.5rem]' />
                        <h3 className='hidden font-bold text-gray-800 md:block'>Home</h3>
                    </div>
                </Link>
                <Link to="/about">
                    <div className="sidebar-link flex space-x-4 items-center p-4 rounded-l-2xl cursor-pointer md:hover:pl-8
                                    transition-all duration-300 ease-in-out">
                        <BsFillGrid1X2Fill className='text-gray-800 text-[1.5rem]' />
                        <h3 className='hidden font-bold text-gray-800 md:block'>About</h3>
                    </div>
                </Link>
                <Link to="/shop">
                    <div className="sidebar-link flex space-x-4 items-center p-4 rounded-l-2xl cursor-pointer md:hover:pl-8
                                    transition-all duration-300 ease-in-out">
                        <BiShoppingBag className='text-gray-800 text-[1.5rem]' />
                        <h3 className='hidden font-bold text-gray-800 md:block'>Shop</h3>
                    </div>
                </Link>
                <Link to="/faq">
                    <div className="sidebar-link flex space-x-4 items-center p-4 rounded-l-2xl cursor-pointer md:hover:pl-8
                                    transition-all duration-300 ease-in-out">
                        <FaQuestion className='text-gray-800 text-[1.5rem]' />
                        <h3 className='hidden font-bold text-gray-800 md:block'>FAQ</h3>
                    </div>
                </Link>
                <Link to="/connect">
                    <div className="sidebar-link flex space-x-4 items-center p-4 rounded-l-2xl cursor-pointer md:hover:pl-8
                                    transition-all duration-300 ease-in-out">
                        <GrConnect className='text-gray-800 text-[1.5rem]' />
                        <h3 className='hidden font-bold text-gray-800 md:block'>Home</h3>
                    </div>
                </Link>
            </aside>
            {/* main output */}
            <section className='bg-white h-[85vh] p-12 rounded-3xl col-span-10 md:h-[80vh]'>
                something
            </section>
        </main>
    )
}

export default Layout