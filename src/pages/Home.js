import React from "react";
import { Link } from 'react-router-dom';
import '../styles/style.css';

class Home extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="main-content">
          <div className="combined-container">
            <div className="welcome-container">
              <div className="welcome-text">
                <div className="div-17">
                  WELCOME TO OUR BOOKTOREAD
                  <br />
                  SHOP
                </div>
                <div className="div-18">TO MAKE YOU WISER</div>
              </div>
              <img
                loading="lazy"
                src='/images/GIFBOOK.gif'
                className="img-3"
                alt="Welcome GIF"
              />
            </div>
            <div className="image-container">
              <img src='/images/welcoming.jpg' className="img-4" alt="WelcomingImage"/>
            </div>
          </div>

          <div className="suggested-books">
            <h2 className="suggested-books-heading">SUGGESTED BOOKS</h2>
            <div className="suggested-books-container">
              <Link to="/bookinfo/2"> {/* Update the indices based on your data */}
                <img src="/images/atomic habits.jpeg" alt="atomic habits" />
              </Link>
              <Link to="/bookinfo/15">
                <img src="/images/The Power of Now.jpg" alt="The Power of Now" />
              </Link>
              <Link to="/bookinfo/3">
                <img src="/images/Daring Greatly.jpg" alt="Daring Greatly" />
              </Link>
              <Link to="/bookinfo/11">
                <img src="/images/The Four Agreements.jpg" alt="The Four Agreements" />
              </Link>
              <Link to="/bookinfo/9">
                <img src="/images/Mindset The New Psychology of Success.jpg" alt="Wherever You Go There You Are" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
