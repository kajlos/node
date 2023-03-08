const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  console.log(req.url);
  res.writeHead(200, { 'Content-Type': 'text/html' });
  let path = './';
  switch (req.url) {
    case '/':
      path += 'index.html';
      break;
    case '/about':
      path += 'about.html';
      break;
    case '/contact-me':
      path += 'contact-me.html';
      break;
    default:
      res.setHeader(404);
      path += '404.html';
      break;
  }

  fs.readFile(path, (error, data) => {
    console.log(path);
    if (error) {
      res.end();
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(8080, error => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is listening on port 8080');
  }
});
