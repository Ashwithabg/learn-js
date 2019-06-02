const EventEmitter = require('events');

class Server extends EventEmitter {
    constructor(client) {
        super();
        this.tasks = {};
        this.taskId = 1;

        process.nextTick(() => {
            this.emit('response', "type a command:");
        });

        client.on('command', (command, args) => {
            switch (command) {
                case 'help':
                case 'add':
                case 'ls':
                case 'delete':
                    this[command](args);
                    break;
                default:
                    this.emit('response', 'unknown command')
            }
        })
    }

    help() {
        this.emit('response', `Available commands are
        add
        ls
        delete: id
        help`)
    }

    add(args) {
        this.tasks[this.taskId] = args.join(' ');
        this.emit('response', `Added task: ${this.taskId}`);
        this.taskId++;
    }

    delete(args) {
        delete(this.tasks[args]);
        this.emit('response', `deleted task: ${args}`)
    }

    ls() {
        this.emit('response', `tasks: \n${this.taskString()}`)
    }

    taskString() {
        return Object.keys(this.tasks).map(key => {
            return `key: ${key}: ${this.tasks[key]}`;
        }).join('\n');
    }
}

module.exports = (client) => new Server(client);

