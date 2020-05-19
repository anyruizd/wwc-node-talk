const http = require('http')
const fs = require('fs');
const port = process.argv[2]
const location = process.argv[3]
const hostname = '127.0.0.1'

const server = http.createServer((request, response) => {
  const readStream = fs.createReadStream(location);

  readStream.on('open', () => {
    readStream.pipe(response);
  });

  readStream.on('error', (err) => {
    response.end(err);
  });
})

server.listen(port, hostname, () => {
  console.log(`Server up and running, listening on port ${port}`)
})
