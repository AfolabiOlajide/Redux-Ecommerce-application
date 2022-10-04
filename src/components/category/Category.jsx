import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    return (
        <>
            <Link to={`categories/:${category}`} >
                <button className='py-1 px-2 border-2 bg-green-200 border-green-400 rounded-md
                                    hover:ring-1 hover:ring-green-200'>{category}</button>
            </Link>
        </>
    )
}

export default Category