const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello world!-0.2');
});

server.listen(8080, () => {
  console.log('Server is running at http://localhost:8080');
});
