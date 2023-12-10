// SignUp.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../pages/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      toast.error('Phone number must have exactly 10 digits.');
      return;
    }

    // Assuming you have user data like { email, password, name, ... }
    const user = { email, password, name, phoneNumber };

    // Get existing users from local storage or initialize an empty array
    const storedDataString = localStorage.getItem('users');
    const storedUsers = storedDataString ? JSON.parse(storedDataString) : [];

    // Check if the email is already registered
    if (storedUsers.some((existingUser) => existingUser.email === email)) {
      toast.error('Email is already registered. Please use a different email.');
      return;
    }

    // Add the new user to the array
    storedUsers.push(user);

    // Save the updated user array back to local storage
    localStorage.setItem('users', JSON.stringify(storedUsers));

    // Store the user data in localStorage for persistence
    localStorage.setItem('user', JSON.stringify(user));

    login(user); // Update the user context on successful signup
    toast.success(`Welcome, ${name}! Sign up successful!`);
    navigate('/');
  };

  return (
    <div>
      <form className="sform" onSubmit={handleSignUp}>
        <label>Sign Up</label><br /><br /><br />
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <input
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          pattern="[0-9]*"
          maxLength="10"
          required
        /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <label className='vlink-msg'><span className='vlink-msg'>Already have an account?</span> <Link to="/login" className="vlink">Login</Link></label>
        <br /><br />
        <button type="submit" className="sub-btn">Submit</button>
      </form>
      <ToastContainer />
      <br />
    </div>
  );
};

export default SignUp;
