// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../pages/CartContext';
import { useUser } from '../pages/UserContext'; // Step 3: Import useUser hook

import CartPopup from '../pages/CartPopup';
import '../styles/style.css';

const Header = () => {
  const { user, logout } = useUser(); // Step 3: Use useUser hook to access user context
  const { getTotalItems } = useCartContext();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartIconClick = () => {
    setIsCartOpen((prevIsOpen) => !prevIsOpen);
  };

  const closeCartPopup = () => {
    setIsCartOpen(false);
  };



  return (
    <div>
      <header className="header">
        <div className="logo">BOOKTOREAD</div>
        <nav className="nav">
          <div className="nav-links">
            <Link to="/" className="nav-link">
              HOME
            </Link>
            <Link to="/shop" className="nav-link">
              SHOP
            </Link>
            <Link to="/about" className="nav-link">
              ABOUT
            </Link>
            <Link to="/contact" className="nav-link">
              CONTACT
            </Link>
          </div>
        </nav>
        <div className="signup-icons-container">
          {user ? (
            // Display user information and logout button if user is logged in
            <div className="user-profile">
            <div className="signup-icons-container">
             <div className="profile-link">
           
             
          </div>
          <button className='log-out' onClick={logout}>Logout</button>
              {user &&
                  <Link to="/UserProfile">
                    <img className='userprofile-icon' src='/images/profile icon.png' alt="Profile Icon" />
                  </Link>
                  }
            
        </div>
            </div>
          ) : (
            // Display signup and login links if user is not logged in
            <div className="signup">
              <Link style={{  textDecoration: 'none', color: 'grey'}} to="/signup" className="signup-button">
                SIGNUP
              </Link>
            </div>
          )}
          <div className="icons">
             <div className="cart-icon-container" onClick={handleCartIconClick}>
                <img src="/images/cart.png" alt="Shopping Cart" />
                {getTotalItems() > 0 && <span className="cart-item-count">{getTotalItems()}</span>}
              </div>
              {isCartOpen && <CartPopup closeCartPopup={closeCartPopup} />}
            <Link to="/bookmark">
              <img src="/images/bookmark.png" alt="Bookmark" />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
