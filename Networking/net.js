const server = require('net').createServer();

let counter = 0;
let sockets = {};

server.on('connection', socket => {
    socket.id = counter++;
    socket.setEncoding('utf8');

    console.log('Client connected!');
    socket.write(`Welcome to myChat\n Please enter your name: \n`);
    socket.on('data', data => {
        console.log(`client${socket.id}: ${data}`);

        if(!sockets[socket.id]) {
            socket.name = data.trim();
            sockets[socket.id] = socket;
            return;
        }

        Object.entries(sockets).forEach(([_, clientSocket]) => {
            if(socket.id !== clientSocket.id) {
                clientSocket.write(`${socket.name}: ${data}`)
            }
        })

    });

    socket.on('end', () => {
        delete sockets[socket.id]
        console.log('client disconnected\n');
    });
});

server.listen(4242, () => {
    console.log('server bound');
});
