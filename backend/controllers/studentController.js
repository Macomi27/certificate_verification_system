const Student = require('../models/Student');
const xlsx = require('xlsx');
const path = require('path');
const PDFDocument = require('pdfkit');

exports.uploadExcel = async (req, res) => {
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

