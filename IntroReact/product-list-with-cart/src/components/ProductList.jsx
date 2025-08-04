import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = ({ products, addToCart }) => {
  return (
    <section className="product-list">
      {products.map((product, index) => (
        <ProductCard 
          key={index} 
          product={product} 
          addToCart={addToCart} 
        />
      ))}
    </section>
  );
};

export default ProductList;
