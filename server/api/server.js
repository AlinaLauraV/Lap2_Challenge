const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const noteRoutes = require('./controllers/notes')

server.use('/notes', noteRoutes)


const port = process.env.PORT || 3000;

// Root route
server.get('/', (req, res) => res.send('Hello, world!'))

module.exports = server
