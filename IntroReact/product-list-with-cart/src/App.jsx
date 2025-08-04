import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import OrderModal from './components/OrderModal';

import './App.css'
import productsData from './data.json';


function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

    // Load product data
  useEffect(() => {
    setProducts(productsData);
  }, []);

  // Add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((item) => item.name === product.name);

      if (itemIndex > -1) {
        // If product already in cart, increase quantity
        const updatedCart = [...prevCart];
        updatedCart[itemIndex].quantity += 1;
        return updatedCart;
      }

      // If new product, add it
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Remove item from cart
  const removeFromCart = (productToRemove) => {
    setCart((prevCart) => prevCart.filter(item => item.name !== productToRemove.name));
  };

  // Update quantity
  const updateQty = (productToUpdate, newQty) => {
    if (newQty < 1) {
      removeFromCart(productToUpdate);
      return;
    }

    setCart((prevCart) =>
      prevCart.map(item =>
        item.name === productToUpdate.name
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

   // Confirm order
  const confirmOrder = () => {
    setCart([]);
    setIsModalOpen(false);
    alert('✅ Your order has been placed!');
  };

  // Start new order
  const resetCart = () => {
    setCart([]);
  };

  return (
    <div className="app-container">
      <ProductList products={products} addToCart={addToCart} />
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        updateQty={updateQty}
        onConfirm={() => setIsModalOpen(true)}
        onReset={resetCart}
      />
      {isModalOpen && (
        <OrderModal
          cart={cart}
          onConfirm={confirmOrder}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default App
