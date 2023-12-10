import React, { useState } from 'react';
import { useCartContext } from './CartContext';
import '../styles/cart-popup.css';
import CheckoutForm from './CheckoutForm';

const CartPopup = ({ closeCartPopup }) => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCartContext();
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    setShowCheckoutForm(true);
  };

  const handleCheckoutComplete = () => {
    // Clear the cart and close the cart popup
    clearCart();
    closeCartPopup();
  };

  return (
    <div className="cart-popup">
      <div className="cart-header">
        <img
          className='back-arrow'
          src='/images/back-arrow.png'
          alt="Back Arrow"
          onClick={closeCartPopup}
        />
        <h2 className='Cart title'> Shopping Cart</h2>
        <button className='clearcartbtn' onClick={clearCart}>Clear Cart</button>
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
                        onClick={() => {
                          const newQuantity = item.quantity - 1;
                          if (newQuantity > 0) {
                            updateQuantity(item.id, newQuantity);
                          } else {
                            removeFromCart(item.id);
                          }
                        }}
                      />
                      <span>{item.quantity}</span>
                      <img
                        className='plus'
                        src='/images/plus.png'
                        alt='increase'
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      />
                    </div>
                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                    <button className='removebtn' onClick={() => removeFromCart(item.id)}>Remove</button>
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
