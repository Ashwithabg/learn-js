const dgram = require('dgram');

const server = dgram.createSocket('udp4');

const port = 3333;
const host = '120.0.0.1';

server.on('listening', () => {
    console.log("Listening")
});

server.bind(port, host);
