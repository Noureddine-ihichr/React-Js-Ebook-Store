import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/cheakout.css'; 

const CheckoutForm = ({ onCheckout, onClose }) => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleCheckout = () => {
    // Check if all required fields are filled
    if (name.trim() === '' || cardNumber.trim() === '' || phoneNumber.trim() === '') {
      // Display an error message using react-toastify
      toast.error('Please fill in all required fields.');
      return;
    }

    // Assuming a successful purchase for demo purposes
    onCheckout();

    // Reset form fields
    setName('');
    setCardNumber('');
    setPhoneNumber('');

    // Display a thank-you message using react-toastify
    toast.success('Thanks for purchasing!');
  }
  return (
    <div className="checkout-form">
      <h3>Customer Information</h3>
      <label>
        Full Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John Doe"
          pattern="[A-Za-z ]+"
          title="Please enter a valid name (letters and spaces only)"
          required
        />
      </label>
      <label>
        Card Number:
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="**** **** **** ****"
          pattern="[0-9]{16}"
          title="Please enter a valid 16-digit card number"
          required
        />
      </label>
      <label>
        Phone Number:
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="123-456-7890"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          title="Please enter a valid phone number (XXX-XXX-XXXX)"
          required
        />
      </label>
      <button onClick={handleCheckout}>Complete Purchase</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default CheckoutForm;
