const express = require('express');
const router = express.Router();
const { getAssetInfo } = require('../controllers/assetController');

// Ruta para consultar info de un activo
router.get('/:assetId', getAssetInfo);

module.exports = router;
