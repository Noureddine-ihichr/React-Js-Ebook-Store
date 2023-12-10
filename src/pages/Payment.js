import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/payment.css';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const confirmPurchase = () => {
    if (name && cardNumber && phoneNumber) {
      // Display a success message using react-toastify
      toast.success('Thanks for purchasing!', {
        className: 'custom-toast',
      });

      // Navigate to '/shop' after a successful purchase
      navigate('/shop');
    } else {
      // Display an error message using react-toastify
      toast.error('Please fill all required information.', {
        className: 'custom-toast',
      });
    }
  };

  const cancelPurchase = () => {
    // Navigate to '/shop' when canceling the purchase
    navigate('/shop');
  };

  return (
    <div className="payment-container">
      <h2 className="payment-heading">Payment Section</h2>
      <div className="payment-input">
        <label className="payment-label">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          pattern="[A-Za-z ]+" // Require letters only
          title="Please enter letters only"
          required
        />
      </div>
      <div className="payment-input">
        <label className="payment-label">Card Number:</label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          pattern="[0-9]{16}" // Require 16 numbers
          title="Please enter 16 numbers"
          placeholder="1234 5678 9012 3456" // Placeholder similar to card numbers
          required
        />
      </div>
      <div className="payment-input">
        <label className="payment-label">Phone Number:</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          pattern="[0-9]{10}" // Require 10 numbers
          title="Please enter 10 numbers"
          required
        />
      </div>
      <div className="payment-buttons">
        <button className="payment-button" onClick={confirmPurchase}>
          Confirm
        </button>
        <button className="payment-button" onClick={cancelPurchase}>
          Cancel
        </button>
      </div>

      {/* Include the ToastContainer component at the end of your component */}
      <ToastContainer />
    </div>
  );
};

export default Payment;
