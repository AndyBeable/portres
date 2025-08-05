import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-6xl mx-auto flex space-x-6">
        <Link to="/" className="text-white hover:text-gray-300">Home</Link>
        <Link to="/products" className="text-white hover:text-gray-300">Products</Link>
      </div>
    </nav>
  );
}

export default Navigation;