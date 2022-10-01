import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchProducts, getProducts } from './app/slices/products';

function App() {
  const products = useSelector(getProducts)
    useEffect(() => {
      fetchProducts();
    })
    console.log(products);
    return (
      <div className="App">
        <h1>Redux Ecommerce Application</h1>
      </div>
    );
}

export default App;
