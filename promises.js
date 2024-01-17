// quick recap of promises

const randomStatusGenerator = () => {
  const randomStatus = Math.random() < 0.8;
  return randomStatus;
};

// Promise tendrà dos funciones como parametros : resolve cuando la promesa se cumpla y reject cuando no
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (randomStatusGenerator()) resolve("I am resolved!!");
    else reject(new Error("I am rejected!!"));
  }, 1000);
});

// ahora vamos a utilizar la promesa
// then puede tener dos parametros, uno para cuando se cumpla y otro para cuando no (gestionar el segundo parametro puede no ser requerido, si luego se anyade un catch)
promise
  .then(
    (result) => console.log(result), // en result tenemos el valor que nos devuelve la promesa con el resolve
  )
  .catch(
    (error) => console.log(error.message), // en error tenemos el valor que nos devuelve la promesa con reject
  );
