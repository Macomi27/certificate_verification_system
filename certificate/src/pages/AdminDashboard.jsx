import React from 'react';

function AdminDashboard() {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    // Handle the file upload logic here (POST to backend)
    console.log('Uploading:', file);
  };

  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>
      <p>Upload Excel files containing student data for certificate generation.</p>
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
}

export default AdminDashboard;
