import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBookContext } from './BookContext';
import { useParams } from 'react-router-dom';
import { useUser } from '../pages/UserContext';
import { useCartContext } from './CartContext';
import { toast } from 'react-toastify';
import booksData from '../datas/data';

import '../styles/book-info.css';

const BookInfo = () => {
  const { addBookToBookmark, removeBookFromBookmark, bookmarkedBooks } = useBookContext();
  const { id } = useParams();
  const bookId = parseInt(id, 10);
  const book = booksData.find((book) => book.id === bookId);
  const navigate = useNavigate();
  const { user } = useUser();
  const { addToCart } = useCartContext();

  const isBookmarked = useCallback(() => {
    return bookmarkedBooks.some((b) => b.id === bookId);
  }, [bookmarkedBooks, bookId]);

  const [isBookmarkedState, setIsBookmarkedState] = useState(isBookmarked());

  useEffect(() => {
    setIsBookmarkedState(isBookmarked());
  }, [isBookmarked]);

  const toggleBookmark = () => {
    if (!user) {
      toast.warning('Please log in to bookmark', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      navigate('/login');
      return;
    }

    if (!isBookmarkedState) {
      addBookToBookmark(book);
      toast.success("Book added to bookmarks!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      removeBookFromBookmark(bookId);
      toast.success("Book removed from bookmarks!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    setIsBookmarkedState(!isBookmarkedState);
  };

  const addToCartHandler = () => {
    if (!user) {
      toast.warning('Please log in to add items to cart', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      navigate('/login');
      return;
    }

    addToCart(book);
    toast.success("Book added to cart!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const buyNowHandler = () => {
    if (!user) {
      toast.warning('Please log in to purchase', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      navigate('/login');
      return;
    }
    // Add to cart and redirect to cart page
    addToCart(book);
    toast.success("Proceeding to checkout...", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    // Add navigation to cart/checkout page here
    navigate('/payment');
  };

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="book-info-container">
      <div className="book-cover-section">
        <div className="book-cover-container">
          <button 
            className="bookmark-btn"
            onClick={toggleBookmark}
            aria-label={isBookmarkedState ? "Remove from bookmarks" : "Add to bookmarks"}
          >
            <img 
              src={isBookmarkedState ? "/images/bookmark after.png" : "/images/bookmark.png"} 
              alt="Bookmark"
            />
          </button>
          <img 
            src={book.img} 
            alt={book.name} 
            className="book-cover"
          />
        </div>
      </div>

      <div className="book-details">
        <h1 className="book-title">{book.name}</h1>
        <span className="book-author">by {book.author}</span>
        
        <p className="book-description">
          {book.description}
        </p>

        <div className="price-actions">
          <span className="book-price">${book.price}</span>
          
          <div className="actions-container">
            <button 
              className="add-to-cart-btn"
              onClick={addToCartHandler}
            >
              <img src="/images/cart.png" alt="Cart" />
              Add to Cart
            </button>

            <button 
              className="buy-now-btn"
              onClick={buyNowHandler}
            >
              Buy Now
            </button>
          </div>
        </div>

        <div className="book-details-grid">
          <div className="detail-item">
            <span className="detail-label">Publisher</span>
            <span className="detail-value">{book.publisher}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Language</span>
            <span className="detail-value">{book.language}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Pages</span>
            <span className="detail-value">{book.pages}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Format</span>
            <span className="detail-value">{book.format}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
