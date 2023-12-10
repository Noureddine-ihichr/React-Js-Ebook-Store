// BookContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const BookContext = createContext();

export const useBookContext = () => {
  return useContext(BookContext);
};

export const BookProvider = ({ children }) => {
  const [bookmarkedBooks, setBookmarkedBooks] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve bookmarked books from localStorage on component mount
    const storedBookmarks = localStorage.getItem('bookmarkedBooks');
    if (storedBookmarks) {
      setBookmarkedBooks(JSON.parse(storedBookmarks));
    }

    // Retrieve cart items from localStorage on component mount
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    // Update localStorage when bookmarkedBooks change
    localStorage.setItem('bookmarkedBooks', JSON.stringify(bookmarkedBooks));

    // Update localStorage when cartItems change
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [bookmarkedBooks, cartItems]);

  const addBookToBookmark = (book) => {
    setBookmarkedBooks((prevBooks) => [...prevBooks, book]);
  };

  const removeBookFromBookmark = (bookId) => {
    setBookmarkedBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
  };

  const clearAllBookmarks = () => {
    setBookmarkedBooks([]);
  };

  const addToCart = (book) => {
    setCartItems((prevItems) => [...prevItems, { ...book, quantity: 1 }]);
  };

  const removeFromCart = (bookId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== bookId));
  };

  const updateCartItemQuantity = (bookId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === bookId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <BookContext.Provider
      value={{
        bookmarkedBooks,
        addBookToBookmark,
        removeBookFromBookmark,
        clearAllBookmarks,
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        clearCart,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
