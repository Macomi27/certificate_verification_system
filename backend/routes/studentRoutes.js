const express = require('express');
const multer = require('multer');
const { uploadExcel } = require('../controllers/studentController');
const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('file'), uploadExcel);
router.get('/:certificateId', getCertificateById);

module.exports = router;
