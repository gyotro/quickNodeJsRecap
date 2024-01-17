// test de emisores de eventos (EventEmitter es una clase)
const EventEmitter = require("events");

// vamos a crear un objeto de tipo EventEmitter

const emitter = new EventEmitter();

// captura el evento saludo
emitter.on("saludo", (nombre) => {
  console.log(`Hola ${nombre}!`);
});

// dispara el evento saludo
emitter.emit("saludo", "Juan");
