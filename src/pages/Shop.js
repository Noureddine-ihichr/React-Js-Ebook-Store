import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../pages/UserContext';
import { useBookContext } from './BookContext';
import { useCartContext } from './CartContext';
import { showToast } from '../utils/toast';
import '../styles/shop.css';
import booksData from '../datas/data';

const Shop = () => {
  const navigate = useNavigate();
  const { bookmarkedBooks, addBookToBookmark, removeBookFromBookmark } = useBookContext();
  const { user } = useUser();
  const { addToCart } = useCartContext();

  const isBookmarked = (book) => {
    return bookmarkedBooks.some((b) => b.id === book.id);
  };

  const toggleBookmark = (book) => {
    if (!user) {
      showToast.error('Please log in to bookmark books');
      setTimeout(() => navigate('/signup'), 1500);
      return;
    }

    if (isBookmarked(book)) {
      removeBookFromBookmark(book.id);
      showToast.success('Book removed from bookmarks');
    } else {
      addBookToBookmark(book);
      showToast.success('Book added to bookmarks');
    }
  };

  const handleAddToCart = (book) => {
    if (!user) {
      showToast.error('Please log in to add items to cart');
      setTimeout(() => navigate('/signup'), 1500);
      return;
    }

    addToCart(book);
    showToast.success('Book added to cart');
  };

  return (
    <div className="books-wrapper">
      <h1 className='shop-title'>Shop</h1>
      <div className="books-container">
        {booksData.map((book) => (
          <div className="book" key={book.id}>
            <Link to={`/bookinfo/${book.id}`}>
              <img
                loading="lazy"
                src={book.img}
                className="cover"
                alt={book.name}
              />
            </Link>
            <div className="details">
              <div className="price-container">
                <Link to={`/bookinfo/${book.id}`} style={{ textDecoration: 'none' }}>
                  <div className="price">{`$${book.price}`}</div>
                </Link>
              </div>
              <div className="bookmark" onClick={() => toggleBookmark(book)}>
                {isBookmarked(book) && (
                  <img className='bookmarked' src="/images/bookmark after.png" alt="Bookmarked" />
                )}
              </div>
            </div>
            <button
              className="add-to-cart"
              onClick={() => handleAddToCart(book)}
            >
              <img src="/images/cart.png" alt="Add to Cart" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
