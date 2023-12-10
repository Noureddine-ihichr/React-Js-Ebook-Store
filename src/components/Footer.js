import React from 'react';
import '../styles/footer.css'; 

class Footer extends React.Component {
  render() {
    return (
      <footer className="bookshop-footer">
          <div className="bookshop-info">
            <h2>BookToRead Bookshop</h2>
            <p>Explore a world of knowledge with our curated collection of books.</p>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/?locale=fr_eng">
              <img loading="lazy" src='/images/facebook.png' alt="Facebook" />
            </a>
            <a href="https://github.com/ImNoord">
              <img loading="lazy" src='/images/gethub logo.jpeg' alt="GitHub" />
            </a>
            <a href="https://www.reddit.com/user/imHokun">
              <img loading="lazy" src='/images/REDDITLOGO.png' alt="Reddit" />
            </a>
          </div>
          <div className="footer-author">by Norueddine Ihichr</div>
        </footer>
    );
  }
}

export default Footer;
