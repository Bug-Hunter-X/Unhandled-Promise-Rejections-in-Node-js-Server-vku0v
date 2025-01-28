# Unhandled Promise Rejections in Node.js Server

This repository demonstrates a common yet often overlooked issue in Node.js applications: unhandled promise rejections.  The `server.js` file contains a simple HTTP server that could potentially encounter unhandled rejections if asynchronous operations within its request handling fail without proper error handling.  The `serverSolution.js` provides a corrected version. 

## Uncommon Error:
Unhandled promise rejections are subtle.  The server might appear to function correctly initially, but the unhandled rejections can cause problems later, such as memory leaks or unexpected crashes.