const fs = require("fs");

fs.readFile("./index.html", "utf8", (err, data) => {
  if (err) {
    console.log(`Error opening file: ${err}`);
  } else {
    console.log(`Showing file text async: \n ${data}`);
  }
});

/* para renombrar un archivo, rename
 para anyadir contenido a un archivo: appedFile
 para eliminar un archivo: unlink
 para eliminar un directorio: rmdir
 para escribir (o reemplazar el contenido) en un archivo: writeFile
*/
// Existe tmb version sincrona de readFile, writeFile, appendFile, rename, unlink, rmdir, mkdir

const data = fs.readFileSync("./index.html", "utf8");

console.log(`Showing file text Sync: \n ${data}`);

// muy importante: En un programa ANTES se ejecutan las funciones sincronas, despues las asincronas, ademas el orden de ejecución de las funciones asincronas es indeterminado (no se sabe exactamente en que orden se ejecutaran)
