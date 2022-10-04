import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, getProducts } from './app/slices/products';

import './index.css';
import Nav from './components/nav/Nav';

function App() {
  const dispatch = useDispatch();
  const products = useSelector(getProducts)

    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);

    console.log(products);

    const productsName = products?.map(product => (
      <li key={product.id}>{product.title}</li>
    ))


    return (
      <div className="App bg-slate-300 min-h-screen">
        <Nav />

        <h3>Products</h3>
        <ul>
          {productsName ? productsName : <li>Error</li>}
        </ul>
      </div>
    );
}

export default App;
