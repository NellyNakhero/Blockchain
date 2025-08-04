import React from 'react';
import './CartItem.css';

const CartItem = ({ item, removeFromCart, updateQty }) => {
  const { name, price, quantity } = item;

  return (
    <li className="cart-item">
      <div className="item-info">
        <p className="item-name">{name}</p>
        <p className="item-price">${(price * quantity).toFixed(2)} ({quantity} @ ${price.toFixed(2)})</p>
      </div>

      <div className="item-controls">
        <button onClick={() => updateQty(item, quantity - 1)} disabled={quantity === 1}>–</button>
        <span>{quantity}</span>
        <button onClick={() => updateQty(item, quantity + 1)}>+</button>
        <button className="remove-btn" onClick={removeFromCart}>Remove</button>
      </div>
    </li>
  );
};

export default CartItem;
