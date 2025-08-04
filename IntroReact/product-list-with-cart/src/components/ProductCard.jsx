import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
  const { name, category, price, image } = product;

  // Choose a responsive image — for simplicity, we use thumbnail
  const imageSrc = image.thumbnail.replace('./assets', '/assets'); 

  return (
    <div className="product-card" tabIndex="0">
      <img src={imageSrc} alt={name} className="product-image" />
      <div className="product-info">
        <p className="product-category">{category}</p>
        <h3 className="product-name">{name}</h3>
        <p className="product-price">${price.toFixed(2)}</p>
      </div>
      <button 
        className="add-to-cart-btn" 
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
