import React from 'react';
import '../styles/OrderModal.css';

export default function OrderModal({ onClose, resetOrder }) {
  function handleStartNew() {
    resetOrder();
    onClose();
  }

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="order-confirmation-title">
      <div className="modal-content">
        <h2 id="order-confirmation-title">Order Confirmed!</h2>
        <p>Thank you for your purchase. Your order will be processed shortly.</p>
        <button onClick={handleStartNew} className="start-new-btn" autoFocus>
          Start New Order
        </button>
      </div>
    </div>
  );
}
