const fs = require('fs');

const readFileArray = function (file, cb) {
    fs.readFile(file, function (err, data) {
        if (err) {
            console.log(err);
        }
        const lines = data.toString().trim().split('\n');
        cb(null, lines);
    });
};


readFileArray('./numbers', (err, lines) => {
    if (err) throw err;

    const numbers = lines.map(Number);
    const oddNumber = numbers.filter(number => number % 2 === 1);
    console.log('odd numbers count', oddNumber.length);
});
