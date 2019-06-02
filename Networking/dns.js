const dns = require('dns');

dns.lookup('pluralsight.com', (err, addr) => {
    console.log(addr);
});