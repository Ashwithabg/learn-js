const EventEmitter = require('events');
const readLine = require('readline');

const readlineInterface = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = new EventEmitter();

const server = require('./server')(client);
server.on('response', (response) => {
    console.log(response)
});

let command, args;
readlineInterface.on('line', (input) => {
    [command, ...args] = input.split(' ');
    console.log("---------------------------")
    client.emit('command', command, args);
    console.log("---------------------------")
});

