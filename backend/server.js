// Code to start the server and listen on port 3000

const app = require('./app');
const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});