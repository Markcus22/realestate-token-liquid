const express = require('express');
const dotenv = require('dotenv');
const assetRoutes = require('./routes/assetRoutes');

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/api/assets', assetRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
