const http = require('http');

const requestListener = async (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  try {
    // Simulate an asynchronous operation that might fail
    const result = await someAsyncOperation();
    response.writeHead(200);
    response.end(JSON.stringify({ message: 'Success!', data: result }));
  } catch (error) {
    console.error('Error during request processing:', error);
    response.writeHead(500);
    response.end(JSON.stringify({ error: 'Internal Server Error' }));
  }
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});

async function someAsyncOperation() {
  // Replace this with your actual asynchronous operation
  // Example:  database query, network request, etc.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a potential error
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        resolve({ value: 'Success!' });
      } else {
        reject(new Error('Simulated asynchronous error'));
      }
    }, 1000);
  });
} 