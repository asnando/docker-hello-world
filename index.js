const express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app
.get('/', (req, res) => res.json({ status: 'online', timestamp: Date.now() }))
.listen(PORT, HOST);