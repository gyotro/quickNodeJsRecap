// tsc --init

import * as http from 'http'

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      data: 'Hello World!',
    }));
  });

const port: number = 3000

server.listen(
    port, () => console.log(`Listening on port ${port}`)
)