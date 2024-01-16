function saludar(nombre) {
  return `Hola ${nombre}!`;
}

function saludaMundo() {
  console.log("Hola mundo!");
}

module.exports.saludar = saludar;
module.exports.saludaTodoMundo = saludaMundo;
