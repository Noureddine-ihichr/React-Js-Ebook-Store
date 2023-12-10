// CartContext.js
import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

const CartContext = createContext();

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }

  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Retrieve cart items from localStorage on component mount
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCart(JSON.parse(storedCartItems));
    }
  }, []); // Empty dependency array to ensure this effect runs only once on mount

  useEffect(() => {
    // Update localStorage when cart items change
    localStorage.setItem('cartItems', JSON.stringify(cart));
    console.log('Cart Items Updated:', cart);
  }, [cart]);

  const addToCart = useCallback((book) => {
    setCart((prevCart) => {
      const existingBook = prevCart.find((item) => item.id === book.id);

      if (existingBook) {
        // If the book is already in the cart, update the quantity
        return prevCart.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If the book is not in the cart, add it with quantity 1
        return [...prevCart, { ...book, quantity: 1 }];
      }
    });
  }, []);

  const removeFromCart = useCallback((bookId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== bookId));
  }, []);

  const updateQuantity = useCallback((bookId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === bookId ? { ...item, quantity: newQuantity } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, getTotalItems }}
    >
      {children}
    </CartContext.Provider>
  );
};
