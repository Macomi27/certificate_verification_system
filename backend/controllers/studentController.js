const Student = require('../models/Student');
const xlsx = require('xlsx');
const path = require('path');
const PDFDocument = require('pdfkit');

// Ensure the uploadExcel function is properly defined
const uploadExcel = async (req, res) => {
  try {
    const filePath = path.join(__dirname, '../uploads', req.file.filename);
    const workbook = xlsx.readFile(filePath);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(sheet);

    for (let row of data) {
      const { certificateId, name, internshipDomain, startDate, endDate } = row;
      await Student.create({
        certificateId,
        name,
        internshipDomain,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
      });
    }
    res.status(200).json({ message: 'Data uploaded successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Ensure the getCertificateById function is properly defined
const getCertificateById = async (req, res) => {
  const { certificateId } = req.params;
  try {
    const student = await Student.findOne({ certificateId });
    if (!student) {
      return res.status(404).json({ message: 'Certificate not found' });
    }

    // Generate PDF
    const doc = new PDFDocument();
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=${certificateId}.pdf`);

    doc.text(`Certificate ID: ${student.certificateId}`);
    doc.text(`Name: ${student.name}`);
    doc.text(`Internship Domain: ${student.internshipDomain}`);
    doc.text(`Start Date: ${student.startDate.toDateString()}`);
    doc.text(`End Date: ${student.endDate.toDateString()}`);

    doc.pipe(res);
    doc.end();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Export the functions correctly
module.exports = {
  uploadExcel,
  getCertificateById
};
