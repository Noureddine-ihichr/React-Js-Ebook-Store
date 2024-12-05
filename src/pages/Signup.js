// Signup.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';
import { showToast } from '../utils/toast';
import '../styles/signup.css';

const SignUp = () => {
  const { login } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    // Validation: Ensure phone number has exactly 10 digits
    if (!/^\d{10}$/.test(phoneNumber)) {
      showToast.error('Phone number must have exactly 10 digits');
      return;
    }

    if (!email || !password || !name || !phoneNumber) {
      showToast.error('Please fill in all fields');
      return;
    }

    // Get existing users from local storage or initialize an empty array
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');

    // Check if the email is already registered
    if (storedUsers.some((existingUser) => existingUser.email === email)) {
      showToast.error('Email is already registered');
      return;
    }

    // Create new user object
    const user = {
      email,
      password,
      name,
      phoneNumber,
      profilePicture: null
    };

    // Add the new user to the array
    storedUsers.push(user);
    localStorage.setItem('users', JSON.stringify(storedUsers));

    // Log user in
    login(user);
    showToast.success('Account created successfully!');
    navigate('/');
  };

  return (
    <div className="signup-container">
      <form className="sform" onSubmit={handleSignUp}>
        <label>Create Account</label>
        <div className="form-fields">
          <input
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            pattern="[0-9]*"
            maxLength="10"
            required
          />
          <input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="links-container">
          <span className="vlink-msg">
            Already have an account?{' '}
            <Link to="/login" className="vlink">
              Login
            </Link>
          </span>
        </div>
        <button type="submit" className="sub-btn">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignUp;
