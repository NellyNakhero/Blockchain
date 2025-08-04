import React from 'react';
import '../styles/ProductCard.css';

export default function ProductCard({ product, addToCart }) {
  const { image, name, category, price } = product;

  return (
    <article className="product-card">
      <picture>
        <source media="(min-width:1024px)" srcSet={image.desktop} />
        <source media="(min-width:768px)" srcSet={image.tablet} />
        <source media="(min-width:375px)" srcSet={image.mobile} />
        <img
          className="product-image"
          src={image.thumbnail}
          alt={name}
          loading="lazy"
          width="300"
          height="300"
        />
      </picture>
      <div className="product-info">
        <p className="product-category">{category.toUpperCase()}</p>
        <h3 className="product-name">{name}</h3>
        <p className="product-price">${price.toFixed(2)}</p>
      </div>
      <button
        className="add-btn"
        aria-label={`Add ${name} to cart`}
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </article>
  );
}
