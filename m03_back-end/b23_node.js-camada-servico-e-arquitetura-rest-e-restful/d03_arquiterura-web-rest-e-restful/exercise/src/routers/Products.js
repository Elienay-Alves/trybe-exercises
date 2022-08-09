const express = require('express');

const router = express.Router();
router.use(express.json());

router.get('/', require('../controllers/productController'))

module.exports = router;