import React, { useState } from 'react';

function StudentCertificate() {
  const [certificateId, setCertificateId] = useState('');
  const [certificateData, setCertificateData] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    // Call API to fetch certificate details
    try {
      const response = await fetch(`/api/certificate/${certificateId}`);
      const data = await response.json();
      setCertificateData(data);
    } catch (error) {
      console.error('Error fetching certificate', error);
    }
  };

  return (
    <div className="student-container">
      <h1>Verify Your Certificate</h1>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder="Enter Certificate ID" 
          value={certificateId} 
          onChange={(e) => setCertificateId(e.target.value)} 
        />
        <button type="submit">Verify</button>
      </form>

      {certificateData && (
        <div className="certificate-result">
          <h2>Certificate Details</h2>
          <p>Name: {certificateData.name}</p>
          <p>Internship Duration: {certificateData.duration}</p>
          <p>Issued Date: {certificateData.dateIssued}</p>
          <button onClick={() => downloadPDF(certificateData)}>Download PDF</button>
        </div>
      )}
    </div>
  );
}

const downloadPDF = (data) => {
  // PDF generation logic (You can integrate jsPDF or pdfmake here)
  console.log('Generating PDF for:', data);
};

export default StudentCertificate;
