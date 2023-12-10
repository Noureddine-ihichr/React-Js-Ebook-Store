import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './pages/UserContext';
import { BookProvider } from './pages/BookContext'; // Update the path
import { CartProvider } from './pages/CartContext';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Bookmark from './pages/Bookmark';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Bookinfo from './pages/Bookinfo';
import CartPopup from './pages/CartPopup';
import Footer from './components/Footer';
import Payment from './pages/Payment';
import UserProfile from './pages/UserProfile';
import './App.css';

function App() {
  return (
    <Router>
    <UserProvider>
    <BookProvider>
      <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/UserProfile" element={<UserProfile />} />
            <Route path="/bookinfo/:id" element={<Bookinfo />} />
            <Route path='/cartpopup' element={<CartPopup/>}/>
            <Route path="/bookmark" element={<Bookmark />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
          <Footer />
          <ToastContainer />
        </CartProvider>
      </BookProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
