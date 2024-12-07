// Header.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../pages/CartContext';
import { useUser } from '../pages/UserContext';
import { useBookContext } from '../pages/BookContext';
import CartPopup from '../pages/CartPopup';
import { useNavigate } from 'react-router-dom';
import { showToast } from '../utils/toast';
import '../styles/header.css';

const Header = () => {
  const { user, logout } = useUser();
  const { getTotalItems } = useCartContext();
  const { bookmarkedBooks } = useBookContext();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 1220 || window.innerWidth < 339) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCartIconClick = () => {
    if (!user) {
      showToast.warning('Please log in to view your cart');
      return;
    }
    setIsCartOpen((prevIsOpen) => !prevIsOpen);
  };

  const closeCartPopup = () => {
    setIsCartOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    logout();
    showToast.success('Logged out successfully');
    navigate('/');
  };

  return (
    <div>
      <header className="header">
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>

        <div className="logo">
          <Link to="/" className="logo-link">
            <span className="logo-text">
              <span className="book">BOOK</span>
              <span className="to">to</span>
              <span className="read">READ</span>
            </span>
          </Link>
        </div>
        
        <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <button className="mobile-menu-close" onClick={() => setIsMobileMenuOpen(false)}>
            ×
          </button>
          <div className="nav-links">
            <Link to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              HOME
            </Link>
            <Link to="/shop" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              SHOP
            </Link>
            <Link to="/about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              ABOUT
            </Link>
            <Link to="/contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              CONTACT
            </Link>
            {/* Mobile-only nav items */}
            {isMobileMenuOpen && windowWidth <= 992 && (
              <>
                <Link to="/bookmark" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                  BOOKMARK
                  {bookmarkedBooks.length > 0 && (
                    <span className="bookmark-count mobile">{bookmarkedBooks.length}</span>
                  )}
                </Link>
                {!user ? (
                  <Link to="/signup" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                    SIGNUP
                  </Link>
                ) : (
                  <Link to="#" className="nav-link" onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}>
                    LOGOUT
                  </Link>
                )}
              </>
            )}
          </div>
        </nav>

        <div className="signup-icons-container">
          {user ? (
            <div className="user-profile">
              <div className="signup-icons-container">
                <div className="profile-link">
                </div>
                <div className="cart-icon-container" onClick={handleCartIconClick}>
                  <img src="/images/cart.png" alt="Shopping Cart" />
                  {getTotalItems() > 0 && <span className="cart-item-count">{getTotalItems()}</span>}
                </div>
                <button className='log-out' onClick={handleLogout}>Logout</button>
                {user && (
                  <Link to="/UserProfile">
                    {user.profilePicture ? (
                      <img 
                        className='userprofile-icon' 
                        src={user.profilePicture} 
                        alt="Profile" 
                      />
                    ) : (
                      <img 
                        className='userprofile-icon' 
                        src='/images/profile icon.png' 
                        alt="Profile Icon" 
                      />
                    )}
                  </Link>
                )}
              </div>
            </div>
          ) : (
            <div className="signup">
              <Link style={{ textDecoration: 'none', color: 'grey' }} to="/signup" className="signup-button">
                SIGNUP
              </Link>
            </div>
          )}
          <div className="icons">
            <Link to="/bookmark">
              <img src="/images/bookmark.png" alt="Bookmark" />
              {bookmarkedBooks.length > 0 && (
                <span className="bookmark-count">{bookmarkedBooks.length}</span>
              )}
            </Link>
          </div>
        </div>
        {isCartOpen && <CartPopup closeCartPopup={closeCartPopup} />}
      </header>
    </div>
  );
};

export default Header;