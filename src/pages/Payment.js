import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/payment.css';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    address: '',
    city: '',
    zipCode: '',
    phoneNumber: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const handleCardNumberChange = (e) => {
    const formattedValue = formatCardNumber(e.target.value);
    setPaymentDetails(prev => ({
      ...prev,
      cardNumber: formattedValue
    }));
  };

  const confirmPurchase = () => {
    const requiredFields = ['cardName', 'cardNumber', 'expiryDate', 'cvv', 'address', 'phoneNumber'];
    const missingFields = requiredFields.filter(field => !paymentDetails[field]);

    if (missingFields.length > 0) {
      toast.error('Please fill in all required fields', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      return;
    }

    toast.success('Payment successful! Thank you for your purchase.', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });

    setTimeout(() => {
      navigate('/shop');
    }, 3000);
  };

  const cancelPurchase = () => {
    navigate('/shop');
  };

  return (
    <div className="payment-container">
      <div className="payment-card">
        <div className="payment-header">
          <h2>Payment Details</h2>
          <div className="payment-icons">
            <i className="fab fa-cc-visa"></i>
            <i className="fab fa-cc-mastercard"></i>
            <i className="fab fa-cc-amex"></i>
          </div>
        </div>

        <div className="payment-form">
          <div className="form-section">
            <h3>Card Information</h3>
            <div className="form-group">
              <label>Name on Card</label>
              <input
                type="text"
                name="cardName"
                value={paymentDetails.cardName}
                onChange={handleInputChange}
                placeholder="John Doe"
              />
            </div>
            <div className="form-group">
              <label>Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={paymentDetails.cardNumber}
                onChange={handleCardNumberChange}
                placeholder="1234 5678 9012 3456"
                maxLength="19"
              />
            </div>
            <div className="form-row">
              <div className="form-group half">
                <label>Expiry Date</label>
                <input
                  type="text"
                  name="expiryDate"
                  value={paymentDetails.expiryDate}
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                  maxLength="5"
                />
              </div>
              <div className="form-group half">
                <label>CVV</label>
                <input
                  type="password"
                  name="cvv"
                  value={paymentDetails.cvv}
                  onChange={handleInputChange}
                  placeholder="123"
                  maxLength="3"
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Billing Information</h3>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={paymentDetails.address}
                onChange={handleInputChange}
                placeholder="123 Street Name"
              />
            </div>
            <div className="form-row">
              <div className="form-group half">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={paymentDetails.city}
                  onChange={handleInputChange}
                  placeholder="City"
                />
              </div>
              <div className="form-group half">
                <label>ZIP Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={paymentDetails.zipCode}
                  onChange={handleInputChange}
                  placeholder="12345"
                  maxLength="5"
                />
              </div>
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={paymentDetails.phoneNumber}
                onChange={handleInputChange}
                placeholder="(123) 456-7890"
              />
            </div>
          </div>

          <div className="payment-actions">
            <button className="cancel-button" onClick={cancelPurchase}>
              Cancel
            </button>
            <button className="confirm-button" onClick={confirmPurchase}>
              Pay Now
            </button>
          </div>
        </div>
      </div>
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={1}
      />
    </div>
  );
};

export default Payment;
