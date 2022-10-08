import React from 'react';
import { useSelector } from 'react-redux';
import { getCategories, getProducts, getErrorStatus } from '../app/slices/products';
import Category from '../components/category/Category';
import Product from '../components/product/Product';

const Shop = () => {
    const categories = useSelector(getCategories);
    const products = useSelector(getProducts);
    const error = useSelector(getErrorStatus);


    let categoryList;

    if (error){
        categoryList = <h3 className='text-3xl my-8 text-gray-800'>Check your conection</h3>
    }else{
        categoryList = categories?.map(category => (
            <Category key={category} category={category} />
        ))
    }



    const productList = products.map(product => (
        <Product key={product.id} product={product} />
    ))

    return (
        <section id='shop' >
            <h3 className='text-lg text-gray-600 mb-3'>Categories:</h3>
            {/* categories */}
            <div className="grid grid-cols-2 gap-1 md:flex md:space-x-4">
                {/* { error ? <p>Nothing to show here</p> : categoryList } */}
                { categoryList }
            </div>
            {/* products */}
            <h3 className='text-lg text-gray-600 my-3'>Products:</h3>
            {error ? <h3 className='text-3xl my-8 text-gray-800'>Check your conection</h3> : (
                <div className="grid grid-cols-2 gap-4 mt-8 lg:grid-cols-4">
                    {productList}                    
                </div>
            )}
            
        </section>
    )
}

export default Shop