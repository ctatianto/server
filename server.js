const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();


app.use(cors()); // Enable CORS for all origins
app.use(express.json());

const VALID_PIN = 'Mys3cureP1n!123';

app.post('/api/authenticate', (req, res) => {
  const { pin, symbol } = req.body;
  if (pin === VALID_PIN) {
    const authtoken = 'sample-token'; // Placeholder for real token
    res.json({ authtoken });
  } else {
    res.status(401).json({ error: 'Invalid PIN' });
  }
});

app.post('/ws-token', async (req, res) => {
  try {
    const response = await axios.post('https://api.kucoin.com/api/v1/bullet-public');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching WebSocket token:', error);
    res.status(500).json({ message: 'Failed to fetch WebSocket token' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
