// Inside your Bookmark component
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useBookContext } from './BookContext'; // Adjust the path
import '../styles/bookmark.css'; // Import your stylesheet

const Bookmark = () => {
  const { bookmarkedBooks, removeBookFromBookmark, clearAllBookmarks } = useBookContext();

  const handleRemoveBookmark = (bookId) => {
    // Remove the book from bookmarks when the bookmark icon is clicked
    removeBookFromBookmark(bookId);
  };

  const handleClearAll = () => {
    // Clear all bookmarks
    clearAllBookmarks();
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
