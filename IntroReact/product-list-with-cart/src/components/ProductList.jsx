import React from 'react';
import ProductCard from './ProductCard';
import '../styles/ProductList.css';

export default function ProductList({ products, addToCart }) {
  return (
    <main className="product-list" role="main" aria-label="Product list">
      {products.map(product => (
        <ProductCard key={product.name} product={product} addToCart={addToCart} />
      ))}
    </main>
  );
}
