import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsSuitHeartFill } from 'react-icons/bs';
import { IoMdCart } from "react-icons/io"
import { Link } from 'react-router-dom';

import { getCategories, fetchCategories, fetchProducts, getProducts, getErrorStatus } from '../app/slices/products';
import Category from '../components/category/Category';

const Shop = () => {
    const categories = useSelector(getCategories);
    const products = useSelector(getProducts);
    const error = useSelector(getErrorStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchProducts());
    }, [dispatch])

    console.log(products);
    console.log(categories)


    let categoryList;

    if (error){
        categoryList = <h3 className='text-3xl my-8 text-gray-800'>Check your conection</h3>
    }else{
        categoryList = categories?.map(category => (
            <Category key={category} category={category} />
        ))
    }

    const productList = products.map(product => (
        <Link to={`/product/${product.id}`} key={product.id}>
            <div className="product relative rounded-lg overflow-hidden border-2 border-gray-300 h-[30vh] shadow-lg shadow-gray-900/30">
                {/* image */}
                <div className="h-[80%]">
                <img src={product.image} className='w-[100%] h-[100%] object-contain' alt="" />
                </div>
                <div className="icons bg-gray-600 flex items-center space-x-3 px-3 h-[20%]">
                    <div className="price text-white font-bold">${product.price}</div>
                    <BsSuitHeartFill className='text-white text-[1.5rem] cursor-pointer'/>
                    <IoMdCart className='text-white text-[1.5rem] cursor-pointer'/>
                </div>
            </div>
        </Link>
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