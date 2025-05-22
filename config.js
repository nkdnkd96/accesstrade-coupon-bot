require('dotenv').config();

module.exports = {
  ACCESS_TOKEN: process.env.ACCESS_TOKEN || 'your_access_token_here',
  API_URL: 'https://api.accesstrade.vn/v1/offers_informations',
  REDIS_URL: process.env.REDIS_URL || 'redis://redis:6379'
};