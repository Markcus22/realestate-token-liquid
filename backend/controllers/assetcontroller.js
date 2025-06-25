const { fetchAssetInfo } = require('../services/liquidService');

const getAssetInfo = async (req, res) => {
  const assetId = req.params.assetId;

  try {
    const assetInfo = await fetchAssetInfo(assetId);
    res.json(assetInfo);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching asset info', details: error.message });
  }
};

module.exports = {
  getAssetInfo,
};
