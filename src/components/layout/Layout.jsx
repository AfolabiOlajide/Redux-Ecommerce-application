import React from 'react'

const Layout = () => {
    return (
        <main className='grid grid-cols-12 px-12'>
            {/* SideBar */}
            <aside className='md:col-span-2'></aside>
            {/* main output */}
            <section className='bg-white h-[80vh] rounded-3xl md:col-span-10 p-12'>
                something
            </section>
        </main>
    )
}

export default Layout