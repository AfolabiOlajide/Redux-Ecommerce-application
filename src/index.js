import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {store} from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fetchCategories, fetchProducts } from "./app/slices/products"

store.dispatch(fetchCategories());
store.dispatch(fetchProducts());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
