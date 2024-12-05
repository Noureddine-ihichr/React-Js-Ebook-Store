import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useBookContext } from './BookContext';
import { useCartContext } from './CartContext';
import { useUser } from './UserContext';
import { showToast } from '../utils/toast';
import '../styles/bookmark.css';

const Bookmark = () => {
  const { bookmarkedBooks, removeBookFromBookmark, clearAllBookmarks } = useBookContext();
  const { addToCart } = useCartContext();
  const { user } = useUser();
  const navigate = useNavigate();

  if (!user) {
    showToast.warning('Please log in to view your bookmarks');
    navigate('/login');
    return null;
  }

  const handleRemoveBookmark = (bookId) => {
    removeBookFromBookmark(bookId);
  };

  const handleClearAll = () => {
    clearAllBookmarks();
  };

  const handleAddToCart = (book) => {
    addToCart({
      id: book.id,
      title: book.title,
      price: book.price,
      image: book.image,
      quantity: 1
    });
    showToast.success('Added to cart successfully!');
  };

  const handleBuyNow = (book) => {
    addToCart({
      id: book.id,
      title: book.title,
      price: book.price,
      image: book.image,
      quantity: 1
    });
    navigate('/payment');
  };

  return (
    <div className="favorites-section-Vzt">
      <p className="favorites-section-ELC">FAVORITES SECTION</p>
      <hr />
      <div className="auto-group-9veg-i8t grid-container">
        {bookmarkedBooks.map((book) => (
          <div key={book.id} className="book-cover-container">
            {/* Wrap the book cover image inside Link */}
            <Link to={`/bookinfo/${book.id}`}>
              <img src={book.img} alt={book.name} className="book-cover" />
            </Link>
            {/* Bookmark icon as an image */}
            <img
              src='/images/bookmarkremover.png'
              alt='bookmark icon to remove'
              className="bookmark-icon"
              onClick={() => handleRemoveBookmark(book.id)}
            />
            <div className="button-group">
              <button 
                className="cart-btn"
                onClick={() => handleAddToCart(book)}
              >
                Add to Cart
              </button>
              <button 
                className="buy-btn"
                onClick={() => handleBuyNow(book)}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="clear-all-button" onClick={handleClearAll}>
        Clear All
      </button>
    </div>
  );
};

export default Bookmark;
