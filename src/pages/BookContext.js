import React, { createContext, useContext, useState, useEffect } from 'react';
import { useUser } from './UserContext';
import { showToast } from '../utils/toast';

const BookContext = createContext();

export const useBookContext = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error('useBookContext must be used within a BookProvider');
  }
  return context;
};

export const BookProvider = ({ children }) => {
  const [bookmarkedBooks, setBookmarkedBooks] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      const storedBookmarks = localStorage.getItem(`bookmarkedBooks_${user.email}`);
      console.log('Retrieved bookmarkedBooks from localStorage:', storedBookmarks);
      if (storedBookmarks) {
        setBookmarkedBooks(JSON.parse(storedBookmarks));
      }

      const storedCartItems = localStorage.getItem('cartItems');
      console.log('Retrieved cartItems from localStorage:', storedCartItems);
      if (storedCartItems) {
        setCartItems(JSON.parse(storedCartItems));
      }
    }
  }, [user]);

  useEffect(() => {
    console.log('Updating localStorage for bookmarkedBooks:', bookmarkedBooks);
    if (user) {
      localStorage.setItem(`bookmarkedBooks_${user.email}`, JSON.stringify(bookmarkedBooks));
    }

    console.log('Updating localStorage for cartItems:', cartItems);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [bookmarkedBooks, cartItems, user]);

  const addBookToBookmark = (book) => {
    if (!user) {
      return;
    }

    const isBookmarked = bookmarkedBooks.some(b => b.id === book.id);
    if (isBookmarked) {
      return;
    }

    const updatedBookmarks = [...bookmarkedBooks, book];
    setBookmarkedBooks(updatedBookmarks);
  };

  const removeBookFromBookmark = (bookId) => {
    const updatedBookmarks = bookmarkedBooks.filter(book => book.id !== bookId);
    setBookmarkedBooks(updatedBookmarks);
  };

  const clearAllBookmarks = () => {
    setBookmarkedBooks([]);
  };

  const addToCart = (book) => {
    console.log('Adding book to cart:', book);
    const existingItem = cartItems.find(item => item.id === book.id);
    if (existingItem) {
      const updatedItems = cartItems.map(item =>
        item.id === book.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...book, quantity: 1 }]);
    }
  };

  const removeFromCart = (bookId) => {
    console.log('Removing book from cart with ID:', bookId);
    setCartItems(prevItems => prevItems.filter(item => item.id !== bookId));
  };

  const updateCartItemQuantity = (bookId, quantity) => {
    console.log('Updating quantity for book:', bookId, 'to:', quantity);
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === bookId
          ? { ...item, quantity: Math.max(0, quantity) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  return (
    <BookContext.Provider value={{
      bookmarkedBooks,
      addBookToBookmark,
      removeBookFromBookmark,
      clearAllBookmarks,
      cartItems,
      addToCart,
      removeFromCart,
      updateCartItemQuantity,
      clearCart
    }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContext;
