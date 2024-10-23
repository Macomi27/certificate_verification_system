// StudentLogin.jsx
import React, { useState } from 'react';
import './StudentLogin.css';

const StudentLogin = () => {
  const [studentData, setStudentData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    months: '',
    certificateId: '',
  });

  const handleChange = (e) => {
    setStudentData({
      ...studentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="student-login">
      <h2>Verify Your Certificate</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" name="firstName" onChange={handleChange} />

        <label>Last Name:</label>
        <input type="text" name="lastName" onChange={handleChange} />

        <label>Company:</label>
        <input type="text" name="company" onChange={handleChange} />

        <label>Duration (Months):</label>
        <input type="number" name="months" onChange={handleChange} />

        <label>Certificate ID:</label>
        <input type="text" name="certificateId" onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentLogin;
