// BookmarkContext.js
import React, { createContext, useContext, useState } from 'react';

const BookmarkContext = createContext();

export const useBookmarkContext = () => {
  return useContext(BookmarkContext);
};

export const BookmarkProvider = ({ children }) => {
  const [bookmarkedBooks, setBookmarkedBooks] = useState([]);

  const addBookToBookmark = (book) => {
    setBookmarkedBooks((prevBookmarks) => [...prevBookmarks, book]);
  };

  const removeBookFromBookmark = (bookId) => {
    setBookmarkedBooks((prevBookmarks) =>
      prevBookmarks.filter((book) => book.id !== bookId)
    );
  };

  const isBookmarked = (bookId) => {
    return bookmarkedBooks.some((book) => book.id === bookId);
  };

  return (
    <BookmarkContext.Provider
      value={{ bookmarkedBooks, addBookToBookmark, removeBookFromBookmark, isBookmarked }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};
