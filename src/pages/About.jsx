import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl text-gray-800">What you need to know about Fake Store</h1>
            <p className='text-slate-600 my-6'>
                Fake Store is an E-commerce web applicatiion that feeds it's data from the  
                <a href="https://fakestoreapi.com/docs" rel='noreferrer' target="_blank" className='underline text-gray-900'> fake store api.</a>
            </p>
            <p className='text-slate-600 my-6'>
                This E-commerce application is a project built to show the strength of Redux and also 
                to show the design prowress of me the developer 😉.
            </p>
            <p className='text-slate-600 my-6'>
                You can check the frequently asked questions here 👉 
                <Link to="/faq"><button className='bg-gray-900 text-white outline-none py-1 px-3 rounded-md hover:ring-2 hover:ring-gray-500'>
                    FAQs
                </button></Link>. 
                You like what I have done and want to connect you can do that here 👉 
                <Link to="/contact"><button className='bg-gray-900 text-white outline-none py-1 px-3 rounded-md hover:ring-2 hover:ring-gray-500'>
                    Connect
                </button></Link>, 
                or you are still willing to check out the features do that here 👉 
                <Link to="/shop"><button className='bg-gray-900 text-white outline-none py-1 px-3 rounded-md hover:ring-2 hover:ring-gray-500'>
                    Shop
                </button></Link>.
            </p>
        </div>
    )
}

export default About