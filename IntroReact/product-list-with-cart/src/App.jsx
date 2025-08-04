// src/App.jsx
import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import OrderModal from './components/OrderModal';
import productsData from './data.json';
import './styles/App.css';

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  function addToCart(product) {
    setCart(prev => {
      const exists = prev.find(item => item.name === product.name);
      if (exists) {
        return prev.map(item =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(name) {
    setCart(prev => prev.filter(item => item.name !== name));
  }

  function updateQuantity(name, qty) {
    if (qty < 1) return;
    setCart(prev =>
      prev.map(item =>
        item.name === name ? { ...item, quantity: qty } : item
      )
    );
  }

  function confirmOrder() {
    setModalOpen(true);
  }

  function resetOrder() {
    setCart([]);
    setModalOpen(false);
  }

  return (
    <div className="app-container">
      <ProductList products={products} addToCart={addToCart} />
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        confirmOrder={confirmOrder}
        resetOrder={resetOrder}
      />
      {modalOpen && <OrderModal onClose={() => setModalOpen(false)} resetOrder={resetOrder} />}
    </div>
  );
}
