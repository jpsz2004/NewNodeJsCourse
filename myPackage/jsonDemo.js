// const curso = require('./curso.json');

// console.log(curso.titulo); //Con esto se hace el paso de Json a JavaScript

//Para el paso de JavaScript a json:
let infoCurso = {
  titulo: "Aprende Node.js",
  numVistas: 3456,
  numLikes: 2345,
  temas: ["Javascript", "Node.js"],
};//Es un objeto y necesitamos que sea una cadena de caracteres

//Objeto -> cadena de caracteres
//Cadena de caracteres en formato JSON
let infoCursoJson = JSON.stringify(infoCurso);//Lo convierte en cadena
console.log(typeof infoCursoJson);

//Cadena de caracteres -> objeto
let infoCursoObjeto = JSON.parse(infoCursoJson);

console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);