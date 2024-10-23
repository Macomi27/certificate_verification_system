import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from './pages/AdminLogin'; // Admin Login/Signup page
import AdminDashboard from './pages/AdminDashboard'; // Admin dashboard
import StudentCertificate from './pages/StudentCertificate'; // Student certificate verification
import WelcomePage from './pages/WelcomePage'; // Landing page
import StudentLogin from './pages/StudentLogin'; // Student login page
import './App.css'; // Custom styles

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page (Welcome Page) */}
        <Route path="/" element={<WelcomePage />} />

        {/* Student Login Page */}
        <Route path="/student/login" element={<StudentLogin />} />

        {/* Student Certificate Verification Page */}
        <Route path="/student/certificate" element={<StudentCertificate />} />

        {/* Admin Login/Signup Page */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Admin Dashboard Page */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
