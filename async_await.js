function ordenarProducto(producto) {
  console.log(`Pedido de ${producto} recibido..`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (producto == "pizza") resolve("ordenando pizza");
      else reject(new Error("No tenemos ese producto"));
    }, 2000);
  });
}

function procesarPedido(respuesta) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (respuesta == "ordenando pizza") resolve("pizza procesada");
      else reject(new Error("No se pudo procesar el pedido"));
    }, 2000);
  });
}

function entregarPedido(respuesta) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (respuesta == "pizza procesada") resolve("pizza entregada");
      else reject(new Error("No se pudo entregar el pedido"));
    }, 2000);
  });
}
// primera version with than chains
/*
ordenarProducto("pizza")
  .then((res) => {
    console.log(`Estado de tu pedido es: ${res}`);
    return procesarPedido(res);
  })
  .then((res) => {
    console.log(`Estado de tu pedido es: ${res}`);
    return entregarPedido(res);
  })
  .then((respuesta) => console.log(`Estado de tu pedido es: ${respuesta}`))
  .catch((err) => console.log(`Error en tu pedido: ${err.message}`))
  .finally(() => console.log("Pedido finalizado"));

  */
// segunda version with async await

console.log("----------------------------------------------------------");

// el async es obligatorio para gestionar llamadas asincronas
async function ordenarProductoAsync(producto) {
  console.log(`Starting process..`);
  try {
    // El await es obligatorio para que la funcion se ejecute de manera asincrona
    const respuesta = await ordenarProducto(producto);
    console.log(`Estado de tu pedido es: ${respuesta}`);
    const respuesta2 = await procesarPedido(respuesta);
    console.log(`Estado de tu pedido es: ${respuesta2}`);
    const respuesta3 = await entregarPedido(respuesta2);
    console.log(`Estado de tu pedido es: ${respuesta3}`);
  } catch (err) {
    console.log(`Error en tu pedido: ${err.message}`);
  }
  console.log("Pedido finalizado");
}
ordenarProductoAsync("pizza");
