const { saludar, saludaTodoMundo } = require("./saludo");
const os = require("os");

//const saludo = require("./saludo");

console.log(saludar("Juan"));
saludaTodoMundo();

console.log(os.platform(), os.homedir(), os.userInfo());
