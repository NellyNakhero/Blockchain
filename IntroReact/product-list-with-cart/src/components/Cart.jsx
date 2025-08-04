import React from 'react';
import CartItem from './CartItem';
import './Cart.css';

const Cart = ({ cart, removeFromCart, updateQty, onConfirm, onReset }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <aside className="cart">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map((item, index) => (
              <CartItem
                key={index}
                item={item}
                removeFromCart={() => removeFromCart(item)}
                updateQty={updateQty}
              />
            ))}
          </ul>

          <div className="cart-summary">
            <p>Total: <strong>${total.toFixed(2)}</strong></p>
            <button className="confirm-btn" onClick={onConfirm}>
              Confirm Order
            </button>
            <button className="reset-btn" onClick={onReset}>
              Start New Order
            </button>
          </div>
        </>
      )}
    </aside>
  );
};

export default Cart;
