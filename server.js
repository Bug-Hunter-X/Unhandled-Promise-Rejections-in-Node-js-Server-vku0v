const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});

//Uncommon error:  Unhandled promise rejections.  This could happen if an asynchronous operation (like a database query or a network request) in your server code fails without being explicitly handled by a `.catch()` block.  The server will continue running, but the unhandled rejection may lead to unexpected behavior or crashes later.