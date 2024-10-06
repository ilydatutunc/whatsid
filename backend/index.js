const express = require('express');
const cors = require('cors');
const http = require('http');   
require('dotenv').config();

const app = express();

app.use(cors({ origin: '*', credentials: true }));
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('welcome');
});

const server = http.createServer(app);
server.listen(PORT, () => {
    console.log(`Chat server is running on ${PORT}`);
});