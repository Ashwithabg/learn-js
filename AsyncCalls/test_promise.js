const fs = require('fs');

const readFileArray = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, function (err, data) {
            if (err) {
                reject(err);
            }
            const lines = data.toString().trim().split('\n');
            resolve(lines);
        });
    });
};


readFileArray('./numbers')
    .then(lines => {
        const numbers = lines.map(Number);
        const oddNumber = numbers.filter(number => number % 2 === 1);
        console.log('odd numbers count', oddNumber.length);
    })
    .catch(console.error);
