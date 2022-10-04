import React from 'react';
import { Outlet, Routes, Route } from 'react-router-dom';

import Home from './Home';

const OutletContainer = () => {
    return (
        <>
            <Routes>
                <Route path='/home' element={<Home />} />
            </Routes>
            <Outlet />
        </>
    )
}

export default OutletContainer;