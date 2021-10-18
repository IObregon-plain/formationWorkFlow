const http = require('http');
const { greetings } = require('./lib/utils');

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end(greetings(undefined));
}

const server = http.createServer(requestListener);
server.listen(9090);