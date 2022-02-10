require('dotenv').config();
const express = require('express');
const cors = require('cors');
const server = express();

const PORT = process.env.PORT || 5000;

server.use(express.json());
server.use(cors());

server.get('/api', (req, res) => {
    res.json({ message: 'i am working'})
})
server.use('*', (req, res) => {
    res.send(`<h1>Boy howdy, this is fun</h1>`)
})
server.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    })
})
server.listen(PORT, () => {
    console.log(`server listening on localhost:${PORT}`);
});