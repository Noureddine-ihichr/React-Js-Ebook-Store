import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBookContext } from './BookContext';
import { useParams } from 'react-router-dom';
import { useUser } from '../pages/UserContext';
import { useCartContext } from './CartContext'; // Adjust the path
import booksData from '../datas/data';

import '../styles/book-info.css';

const BookInfo = () => {
  const { addBookToBookmark, removeBookFromBookmark, bookmarkedBooks } = useBookContext();
  const { id } = useParams();
  const bookId = parseInt(id, 10);
  const book = booksData.find((book) => book.id === bookId);
  const navigate = useNavigate();
  const { user } = useUser();
  const { addToCart } = useCartContext(); // Import the addToCart function

  const isBookmarked = useCallback(() => {
    return bookmarkedBooks.some((b) => b.id === bookId);
  }, [bookmarkedBooks, bookId]);

  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [isBookmarkedState, setIsBookmarked] = useState(isBookmarked());

  const updateQuantityDisplay = useCallback(() => {
    document.getElementById("quantity").innerText = `${quantity}`.padStart(2, '0');
  }, [quantity]);

  const updateTotalPrice = useCallback(() => {
    const totalPrice = (quantity * price).toFixed(2);
    document.getElementById("book-price").innerText = `$${totalPrice}`;
  }, [quantity, price]);

  useEffect(() => {
    if (book) {
      setPrice(book.price);
    }
  }, [book]);

  useEffect(() => {
    updateQuantityDisplay();
    updateTotalPrice();
    setIsBookmarked(isBookmarked());
  }, [quantity, price, updateQuantityDisplay, updateTotalPrice, isBookmarked]);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const toggleBookmark = () => {
    if (!user) {
      // If the user is not logged in, navigate to the sign-up/login page
      navigate('/login'); // You can adjust the path as needed
      return;
    }

    if (!isBookmarkedState) {
      addBookToBookmark(book);
    } else {
      removeBookFromBookmark(bookId);
    }
    setIsBookmarked((prevIsBookmarked) => !prevIsBookmarked);
  };

  const addToCartHandler = () => {
    // Redirect to signup page if the user is not logged in
    if (!user) {
      navigate('/login'); // You can adjust the path as needed
      return;
    }

    addToCart(book);
    // Optionally, you can show a notification or perform other actions after adding to the cart
  };

  const buyNowHandler = () => {
    // Redirect to login page if the user is not logged in
    if (!user) {
      navigate('/login'); // You can adjust the path as needed
      return;
    }
    else{
      navigate('/payment');
    }
  }

  


  return (
    <div className="book-info-page-Erp">
      <div className="detail-9cQ">
        <div className="auto-group-tmgp-EXN">
          <div className="coverbook-XmN">
            <img className="book-cover" src={book.img} alt={book.name} />
          </div>
          <div className="download-1-2-r2x"></div>
        </div>
        <div className="bookdetails-kPE">
          <div className="auto-group-smw2-UKE">
            <p className="harry-potter-BjS">{book.name}</p>
            <div className="favorite-FzC">
              <img
                className="bookmarksimple-C8k"
                src={isBookmarkedState ? "/images/bookmark after.png" : "/images/bookmark.png"}
                alt="bookmark"
                onClick={toggleBookmark}
              />
            </div>
          </div>
          <div className="bannerdashbgiii-5iL">
            <div className="rectangle-11-1bz"></div>
            <div className="rectangle-10-jXz"></div>
            <p className="author-a-jack-thorne-32t">
              <span className="author-a-jack-thorne-32t-sub-0">Author (a): </span>
              <span className="author-a-jack-thorne-32t-sub-1">{book.author}</span>
            </p>
          </div>
          <div className="bannerdashbgii-2Z2">
            <div className="rectangle-11-YnG"></div>
            <div className="rectangle-10-sZe"></div>
            <p className="Description-text">{book.description}</p>
          </div>
          <div className="auto-group-rv6l-7MW">
            <p className="item-1400-EBE" id="book-price">{`$${price.toFixed(2)}`}</p>
            <div className="countproduct-k9a">
              <img className="minuscircle-5Sk" src="/images/minus.png" alt="minus" onClick={decreaseQuantity} />
              <div id="quantity" className="auto-group-98uz-1rC">{quantity.toString().padStart(2, '0')}</div>
              <img className="pluscircle-N6Q" src="/images/plus.png" alt="plus" onClick={increaseQuantity} />
            </div>
          </div>
          <div className="auto-group-igwq-Vgp">
            <div className="buybutton-cmS" onClick={addToCartHandler}>
              <img className="shoppingcart-ipU" src="/images/cart.png" alt="Add to Cart " onClick={addToCartHandler} />
            </div>
            <button className="rectbuttoniv-DWL" onClick={buyNowHandler} >Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
