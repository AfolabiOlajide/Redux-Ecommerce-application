import React from 'react'

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
                <div className="md:bg-gradient-to-r bg-gradient-to-b from-green-400 to-cyan-400 py-5 px-3 rounded-lg shadow-lg shadow-gray-500/60 text-center text-gray-700">
                    <h2 className='font-bold text-3xl text-gray-800 mb-3'>Design</h2>
                    <p className='font-semibold'>We offer one of the best designs out there so that you feel a sense of Premium when surfing our shop.</p>
                </div>
                <div className="md:bg-gradient-to-r bg-gradient-to-b from-cyan-400 to-teal-400 py-5 px-3 rounded-lg shadow-lg shadow-gray-500/60 text-center text-gray-700">
                    <h2 className='font-bold text-3xl text-gray-800 mb-3'>UX</h2>
                    <p className='font-semibold'>Shop just like you would on other applications, we put our users first so we decided to make your experience seemless.</p>
                </div>
                <div className="md:bg-gradient-to-r bg-gradient-to-b from-teal-400 to-blue-400 py-5 px-3 rounded-lg shadow-lg shadow-gray-500/60 text-center text-gray-700">
                    <h2 className='font-bold text-3xl text-gray-800 mb-3'>End of search</h2>
                    <p className='font-semibold'>Have you been looking for a front-end Developer, well welcome to the end of your search because here is one ready to give you premium service.</p>
                </div>
            </div>
        </div>
    )
}

export default Home