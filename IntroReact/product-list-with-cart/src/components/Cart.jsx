// src/components/Cart.jsx
import React from 'react';
import '../styles/Cart.css';

export default function Cart({
  cart,
  removeFromCart,
  updateQuantity,
  confirmOrder,
  resetOrder
}) {
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <aside className="cart" aria-label="Shopping cart">
      <header className="cart-header">
        <h2>Your Cart</h2>
        <button
          className="reset-cart-btn"
          aria-label="Start a new order"
          onClick={resetOrder}
        >
          Start New Order
        </button>
      </header>

      {cart.length === 0 ? (
        <p className="empty-msg">Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map(item => (
              <li key={item.name} className="cart-item">
                <div className="cart-item-info">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">${item.price.toFixed(2)}</p>
                </div>
                <div className="cart-item-controls">
                  <button
                    className="qty-btn"
                    aria-label={`Decrease quantity of ${item.name}`}
                    onClick={() => updateQuantity(item.name, item.quantity - 1)}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span className="qty">{item.quantity}</span>
                  <button
                    className="qty-btn"
                    aria-label={`Increase quantity of ${item.name}`}
                    onClick={() => updateQuantity(item.name, item.quantity + 1)}
                  >
                    +
                  </button>
                  <button
                    className="remove-btn"
                    aria-label={`Remove ${item.name} from cart`}
                    onClick={() => removeFromCart(item.name)}
                  >
                    ✕
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p>
              Total: <strong>${totalPrice.toFixed(2)}</strong>
            </p>
            <button
              className="confirm-btn"
              onClick={confirmOrder}
              aria-label="Confirm Order"
            >
              Confirm Order
            </button>
          </div>
        </>
      )}
    </aside>
  );
}
