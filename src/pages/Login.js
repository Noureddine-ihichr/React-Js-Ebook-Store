// Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../pages/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/signup.css';

const Login = () => {
  const { login } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    // Retrieve stored users from localStorage
    const storedDataString = localStorage.getItem('users');

    if (storedDataString) {
      const storedUsers = JSON.parse(storedDataString);

      // Find the user by email
      const user = storedUsers.find((user) => user.email === email);

      if (user && user.password === password) {
        // Store the user data in localStorage for persistence
        localStorage.setItem('user', JSON.stringify(user));

        // Update the user context on successful login
        login(user);

        // Use toast notification
        toast.success(`Welcome back, ${user.name}! Sign in successful!`);
        navigate('/');
      } else {
        toast.error('Invalid email or password. Please try again.');
      }
    } else {
      toast.error('No account found. Please sign up first.');
    }
  };

  return (
    <div className="login-container">
      <form className="sform" onSubmit={handleSignIn}>
        <label>Login</label>
        <br />
        <br />
        <br />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <label>
          <span className='vlink-login-msg'>Don't have an account?</span>{' '}
          <Link to="/signup" className="vlink">
            {' '}
            Sign Up
          </Link>
        </label>{' '}
        <br />
        <br />
        <button className="sub-btn" type="submit">
          Submit
        </button>
      </form>
      <ToastContainer />
      <br />
    </div>
  );
};

export default Login;
