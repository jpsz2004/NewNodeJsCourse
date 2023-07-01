function saludar(nombre) {
  return `Hola, ${nombre}`;
}

// //Exportar modulos
// // console.log(module.exports);//module.exports es un objeto
// module.exports.saludar = saludar;
// // console.log(module.exports); //Ya quedó exportado

function saludarHolaMundo() {
  return `Hola, mundo!`;
}

module.exports.saludarHolaMundo = saludarHolaMundo;

module.exports = {
  saludar: saludar,
  saludarHolaMundo: saludarHolaMundo,
};
