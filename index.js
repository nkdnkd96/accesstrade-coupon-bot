const axios = require('axios');
const { createClient } = require('redis');
const { ACCESS_TOKEN, API_URL, REDIS_URL } = require('./config');

async function connectRedis() {
  const client = createClient({ url: REDIS_URL });
  client.on('error', (err) => console.error('Redis Client Error:', err));
  await client.connect();
  return client;
}

async function main() {
  console.log('Starting bot...');

  // Kết nối Redis
  const redisClient = await connectRedis();
  console.log('Connected to Redis');

  // Test gọi API (thay bằng logic thực tế)
  try {
    const response = await axios.get(API_URL, {
      headers: { Authorization: `Token ${ACCESS_TOKEN}` }
    });
    console.log('API Response:', response.data);
    // Thêm logic lưu vào Redis ở đây
  } catch (error) {
    console.error('Error fetching API:', error.message);
  }

  await redisClient.quit();
}

main().catch(console.error);