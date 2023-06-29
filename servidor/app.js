const http = require("http");

// const servidor = http.createServer((req, res) =>{//Solicitud y respuesta
//     //Proceso
//     console.log('Solicitud nueva');
//     res.end('Hola, Mundo');
// });

//req y res
const servidor = http.createServer((req, res) => {
  // console.log('===> req (solicitud)');
  // console.log(req.url);
  // console.log(req.method);//GET
  // console.log(req.headers);

  console.log('===> res (respuesta)');
  console.log(res.statusCode);//200 ok

  res.end('Hola mundooo!');
});

const puerto = 4000;

servidor.listen(puerto, () => {
  console.log(`El servidor esta escuchando en el puerto ${puerto}...`);
}); //Escuchar solicitudes
