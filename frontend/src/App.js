import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import Navigation from './components/Navigation';

function App() {

  
return (
  <BrowserRouter>
  <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<Product />} />
    </Routes>
  </BrowserRouter>
)

}

export default App;
