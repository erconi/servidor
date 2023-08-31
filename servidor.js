const http = require('http');
const hostname = 'localhost'
const port = 8000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ name: 'Tu nombre', message: 'Hola!' }));
});

const chalk = require('chalk');
server.listen(port, hostname, () => {
  console.log(chalk.green(`Server running at http://${hostname}:${port}/`));
});


