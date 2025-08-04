import React from 'react';
import './OrderModal.css';

const OrderModal = ({ cart, onConfirm, onClose }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Order Summary</h2>
        <ul className="modal-items">
          {cart.map((item, i) => (
            <li key={i}>
              {item.name} × {item.quantity} = ${(
                item.price * item.quantity
              ).toFixed(2)}
            </li>
          ))}
        </ul>
        <p className="modal-total">Total: <strong>${total.toFixed(2)}</strong></p>
        <div className="modal-buttons">
          <button className="confirm-btn" onClick={onConfirm}>Place Order</button>
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
