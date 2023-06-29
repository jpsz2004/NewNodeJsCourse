// const saludos = require("./saludos.js");
// console.log(saludos.saludar("Alber"));
// console.log(saludos.saludarHolaMundo());

// console.log(saludar("Alberto"));
//Se debe importar el modulo

// const {saludar, saludarHolaMundo} = require(`./saludos.js`);//Para llamar unicamente a saludarHolaMundo
// console.log(saludarHolaMundo());
// console.log(saludar("ALber"));

//MODULO CONSOLE

//----------------------------------------------------------

// console.error(new Error(`404: Not found`));

//MODULO PROCESS
// console.log(process);
// console.log(process.env);

// console.log(process.argv);//Crea un arreglo con la ubicacion del arcivo y la ubicacion de la carpeta. Si ingresamos mas argumentos los guarda en el arreglo

//----------------------------------------------------------

// for(let i = 2; i < process.argv.length; i++){
//     console.log(process.argv[i]);
// }//Para visualizar los datos que se ingresan desde la terminal

//----------------------------------------------------------

// //MODULO OS (Operating System)
// const os =  require('os');
// console.log(os.type());//Windows NT
// console.log(os.homedir());//Muestra la raiz
// console.log(os.uptime());//Tiempo en segundos que lleva trabajando el SO
// console.log(os.userInfo());//Informacion del usuario

//----------------------------------------------------------

//MODULO TIMERS (Ejecucion del codigo luego de un periodo de tiempo)
//SetTimeout: esperar unos milisegundos antes de ejecutar
// function mostrarTema(tema) {
//   console.log(`Estoy aprendiendo ${tema}`);
// }

// // // mostrarTema("NodeJs");
// // setTimeout(mostrarTema, 4000, 'NodeJS');//Espera cuatro segundos para hacer la funcion mostrarTema

// // console.log('Antes: ');

// // setImmediate(mostrarTema, 'NodeJS');//Se ejecuta luego del codigo sincrono
// // console.log('Despues: ');

// setInterval(mostrarTema, 200, 'NodeJS');//Repite la funcion cada determinado tiempo y lo hace de manera infinita.

//-------------------------------------------------------------------
//MODULO FS
//fs.readFile permite leer el contenido de un archivo de html. 
// const fs = require ('fs');
// fs.readFile('index.html', 'utf-8', (err, contenido) =>{
//   if(err){
//     console.log(err);
//   }else{
//     console.log(contenido);
//   }
// });

//-------------------------------------------------------------------
//MODULO EVENTS
// const eventEmitter = require('events');

// const emisorProductos = new eventEmitter();

// emisorProductos.on('compra', (nombre, total, numProductos)=>{
//     console.log(`${nombre} realizó una compra de ${numProductos} productos por $${total}`);
// });

// emisorProductos.emit('compra', 'Juan', 500, 30);//Ocurre una compra
// // console.log(eventEmitter);//Emitir un evento