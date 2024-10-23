const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  certificateId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  internshipDomain: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});

module.exports = mongoose.model('Student', studentSchema);
