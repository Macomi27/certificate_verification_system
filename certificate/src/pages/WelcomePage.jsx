// WelcomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <header>
        <h1>Welcome to Certify</h1>
        <p>Effortlessly verify your certificates.</p>
      </header>

      <div className="certificate-images">
        <img src={image1} alt="Certificate 1" className="certificate" />
        <img src={image2} alt="Certificate 2" className="certificate" />
        <img src={image3} alt="Certificate 3" className="certificate" />
      </div>

      <div className="login-section">
        <Link to="/student/login">
          <button className="login-btn">Student Login</button>
        </Link>
        <Link to="/admin/login">
          <button className="login-btn">Admin Login</button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
