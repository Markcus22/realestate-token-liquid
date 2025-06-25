const axios = require('axios');
const LIQUID_API_URL = process.env.LIQUID_API_URL;

const fetchAssetInfo = async (assetId) => {
  const url = `${LIQUID_API_URL}/asset/${assetId}`;
  const response = await axios.get(url);
  return response.data;
};

module.exports = {
  fetchAssetInfo,
};
