import React, { useState } from 'react';
import { useCartContext } from './CartContext';
import { showToast } from '../utils/toast';
import '../styles/cart-popup.css';
import CheckoutForm from './CheckoutForm';

const CartPopup = ({ closeCartPopup }) => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCartContext();
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleQuantityChange = (bookId, newQuantity) => {
    if (newQuantity < 1) {
      showToast.warning('Quantity cannot be less than 1');
      return;
    }
    if (newQuantity > 10) {
      showToast.warning('Maximum quantity is 10');
      return;
    }
    updateQuantity(bookId, newQuantity);
    showToast.success('Cart updated');
  };

  const handleRemove = (bookId) => {
    removeFromCart(bookId);
    showToast.success('Item removed from cart');
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      showToast.error('Your cart is empty');
      return;
    }
    setShowCheckoutForm(true);
  };

  const handleCheckoutComplete = () => {
    // Clear the cart and close the cart popup
    clearCart();
    closeCartPopup();
  };

  const handleClearCart = () => {
    if (cart.length === 0) {
      showToast.warning('Cart is already empty');
      return;
    }
    clearCart();
    showToast.success('Cart cleared successfully!');
  };

  return (
    <div className="cart-popup">
      <div className="cart-header">
        <img
          className='back-arrow'
          src="/images/back-arrow.png"
          alt="Back"
          onClick={closeCartPopup}
          style={{ display: 'block', objectFit: 'contain' }}
        />
        <h2 className='Cart title'>Shopping Cart</h2>
        {cart.length > 0 && (
          <button className="clear-cart" onClick={handleClearCart}>
            Clear All
          </button>
        )}
      </div>
      {showCheckoutForm ? (
        <CheckoutForm onCheckout={handleCheckoutComplete} onClose={() => setShowCheckoutForm(false)} />
      ) : (
        <React.Fragment>
          {cart.length > 0 ? (
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.img} alt={item.name} />
                  <div className="item-details">
                    <p>{item.name}</p>
                    <div className="quantity-controls">
                      <img
                        className='minus'
                        src='/images/minus.png'
                        alt='decreasebtn'
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      />
                      <span>{item.quantity}</span>
                      <img
                        className='plus'
                        src='/images/plus.png'
                        alt='increase'
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      />
                    </div>
                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                    <button className='removebtn' onClick={() => handleRemove(item.id)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className='emptycart'>Your cart is empty.</p>
          )}
          {cart.length > 0 && (
            <div className="cart-footer">
              <p className="total-price">Total: ${getTotalPrice()}</p>
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          )}
        </React.Fragment>
      )}
    </div>
  );
};

export default CartPopup;
