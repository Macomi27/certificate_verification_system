// src/pages/AdminLogin.jsx
import React, { useState } from 'react';
import './AdminLogin.css'; // Custom styles

const AdminLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [adminData, setAdminData] = useState({
    adminName: '',
    company: '',
    password: '',
  });

  const handleChange = (e) => {
    setAdminData({
      ...adminData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Logic for admin login
      console.log("Admin Login", adminData);
    } else {
      // Logic for admin signup
      console.log("Admin Signup", adminData);
    }
  };

  return (
    <div className="admin-login">
      <h2>{isLogin ? 'Admin Login' : 'Admin Signup'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Admin Name:</label>
        <input type="text" name="adminName" onChange={handleChange} />

        <label>Company:</label>
        <input type="text" name="company" onChange={handleChange} />

        <label>Password:</label>
        <input type="password" name="password" onChange={handleChange} />

        <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
      </form>

      <p className='fit' onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'New Admin? Signup here' : 'Already an Admin? Login here'}
      </p>
    </div>
  );
};

export default AdminLogin;
