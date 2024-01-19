const http = require("http");

const servidor = http.createServer((req, res) => {
  console.log("Peticion recibida");
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);
  res.writeHead(200, { "Content-Type": "text/plain" }).end("\nHola mundo\n");
});

var puerto = 3000;

servidor.listen(3000, () => {
  console.log(`Servidor corriendo en el puerto ${puerto}`);
});

// para ejecutar: curl http://localhost:3000/
