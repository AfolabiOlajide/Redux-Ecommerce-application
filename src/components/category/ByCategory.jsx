import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectByCategory } from '../../app/slices/products';
import Product from '../product/Product';


const ByCategory = () => {
    let { category } = useParams();
    
    const products = useSelector( (state) => selectByCategory(state, category) )
    // console.log(products);

    const productList = products.map(product => (
        <Product key={product.id} product={product} />
    ))

    return (
        <div>
            <h3 className="text-xl text-center font-semibold text-gray-800">{category}</h3>
            <div className="grid grid-cols-2 gap-4 mt-8 lg:grid-cols-4">
                {productList}                    
            </div>
        </div>
    )
}

export default ByCategory