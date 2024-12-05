// Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';
import { showToast } from '../utils/toast';
import '../styles/signup.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      showToast.error('Please fill in all fields');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      login(user);
      showToast.success('Logged in successfully!');
      navigate('/');
    } else {
      showToast.error('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <form className="sform" onSubmit={handleSubmit}>
        <label>Welcome Back!</label>
        <div className="form-fields">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="links-container">
          <span className="vlink-msg">
            Don't have an account?{' '}
            <Link to="/signup" className="vlink">
              Sign Up
            </Link>
          </span>
        </div>
        <button className="sub-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
