// WelcomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <header>
        <h1>Welcome to Certify</h1>
        <p>Effortlessly verify your certificates.</p>
      </header>

      <div className="certificate-images">
        <img src="../assets/image1.png" alt="Certificate 1" className="certificate" />
        <img src="../assets/image2.png" alt="Certificate 2" className="certificate" />
        <img src="../assets/image3.png" alt="Certificate 3" className="certificate" />
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
