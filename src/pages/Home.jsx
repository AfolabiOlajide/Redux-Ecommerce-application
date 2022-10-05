import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="banner w-[100%] h-[30vh] bg-gradient-to-br from-green-400 to-blue-500 rounded-lg
                            shadow-lg shadow-gray-500/60 flex items-center justify-center">
                <h1 className="font-bold text-center text-[3rem] text-white text-[shadow: 2px 2px #000] md:text-[5rem]">EXPLORE & SHOP</h1>
            </div>
            {/* Why should you shop with us */}
            <h3 className="text-center my-6 font-bold text-lg text-gray-800 md:text-2xl">Why should you shop with us?</h3>
            <div className="flex flex-col space-y-6 mt-6 md:flex-row md:space-x-6 md:justify-around md:space-y-0">
                <div className="bg-gradient-to-br from-gray-600 to-gray-800 py-5 px-3 rounded-lg shadow-lg shadow-gray-500/70 text-center text-slate-300">
                    <h2 className='font-bold text-3xl text-white mb-3'>Design</h2>
                    <p className='font-semibold'>We offer one of the best designs out there so that you feel a sense of Premium when surfing our shop.</p>
                </div>
                <div className="bg-gradient-to-br from-gray-600 to-gray-800 py-5 px-3 rounded-lg shadow-lg shadow-gray-500/70 text-center text-slate-300">
                    <h2 className='font-bold text-3xl text-white mb-3'>UX</h2>
                    <p className='font-semibold'>Shop just like you would on other applications, we put our users first so we decided to make your experience seemless.</p>
                </div>
                <div className="bg-gradient-to-br from-gray-600 to-gray-800 py-5 px-3 rounded-lg shadow-lg shadow-gray-500/70 text-center text-slate-300">
                    <h2 className='font-bold text-3xl text-white mb-3'>End of search</h2>
                    <p className='font-semibold'>Have you been looking for a front-end Developer, well welcome to the end of your search because here is one ready to give you premium service.</p>
                </div>
            </div>
            <div className="my-8">
                <h3 className="font-semibold md:text-2xl text-xl">Okay nothing much to see here go and do some shopping @ &nbsp;    
                <Link to="/shop">
                    <button className='bg-gray-900 text-white text-lg outline-none py-1 px-3 mr-8 rounded-md hover:ring-2 hover:ring-gray-500'>
                        Shop
                    </button>
                </Link>
                </h3>
            </div>
        </div>
    )
}

export default Home