import React from 'react';
import '../styles/about.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About BookToRead</h1>
        <div className="header-underline"></div>
      </div>
      
      <div className="about-content">
        <div className="about-section welcome">
          <h2>Welcome to Our Story</h2>
          <p>
            Welcome to BookToRead, where the enchanting world of books comes to life. Established with a passion for literature and a commitment to fostering the love of reading, we are more than just a bookshop; we are your gateway to endless adventures, knowledge, and imagination.
          </p>
        </div>

        <div className="about-section mission">
          <h2>Our Mission</h2>
          <p>
            At BookToRead, we believe that books have the power to transform lives, spark creativity, and connect people across cultures. Our carefully curated collection spans genres, from timeless classics to contemporary bestsellers, ensuring there's something for every reader.
          </p>
        </div>

        <div className="about-section experience">
          <h2>The BookToRead Experience</h2>
          <p>
            What sets us apart is our dedication to providing a personalized experience. Our knowledgeable and friendly staff are avid readers themselves, ready to assist you in discovering your next favorite story or helping you find the perfect gift.
          </p>
        </div>

        <div className="about-section community">
          <h2>Our Community</h2>
          <p>
            BookToRead is more than just a place to buy books. It's a community hub where book lovers gather, ideas are exchanged, and literary events come to life. From book signings and author readings to reading clubs and storytelling sessions for children, we host a variety of events that celebrate the magic of storytelling.
          </p>
        </div>

        <div className="about-section favorite-books">
          <h2>Share Your Story</h2>
          <p>
            We're thrilled to introduce our "Favorite Book" section, where readers like you can share your most cherished literary gems. We invite you to tell us about your favorite book – the one that made you laugh, cry, or see the world in a new light.
          </p>
        </div>

        <div className="about-section commitment">
          <h2>Our Commitment</h2>
          <p>
            We are deeply committed to promoting literacy and a love for books. Through partnerships with local schools, libraries, and charitable organizations, we actively engage in initiatives that support education and reading programs within our community.
          </p>
        </div>

        <div className="about-section closing">
          <p>
            Thank you for being a part of our story. Join us at BookToRead and let the pages of our books transport you to new worlds, ignite your imagination, and inspire your journey through the written word.
          </p>
          <div className="signature">
            <p>Happy reading!</p>
            <p>The BookToRead Team</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
