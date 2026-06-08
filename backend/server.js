const http = require('http');
const supabase = require('./supabaseClient');
const app= require('express');
const port = process.env.PORT || 5000;

app.use(express.json());

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Server is alive');
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});