// const promesaCumplida = true;

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(promesaCumplida){
//             resolve('¡Promesa cumplida!');
//         }else{
//             reject('Promesa rechazada...');
//         }
//     }, 3000)
// });

// // myPromise.then((valor) => {
// //     console.log(valor);
// // });//Solo esta asociada a la promesa cumplida

// const manejarPromesaCumplida = (valor) => {
//     console.log(valor);
// };

// const manejarPromesaRechazada = (razonRechazo) => {
//     console.log(razonRechazo);
// };

// myPromise.then(manejarPromesaCumplida, manejarPromesaRechazada);

//EJEMPLO PEDIDO DE PIZZA
// const estatusPedido = () => {
//     return Math.random() < 0.8;
// }

// const miPedido = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(estatusPedido()){
//             resolve('Pedido exitoso. En camino!')
//         }else{
//             reject('Error al realizar el pedido.')
//         }
//     }, 3000);
// })

// miPedido
//     .then((mensajeDeConfirmacion) =>{
//         console.log(mensajeDeConfirmacion);
//     })
//     .catch((mensajeDeError) =>{
//         console.log(mensajeDeError);
//     }); //Podemos aqui reemplazar .then por .catch pero solo en este caso de mensaje de error. Ya no es necesario usar el null como argumento

/********************************************************/
//ENCADENAR PROMESASY ASYNC AWAIT
function ordenarProducto(producto) {
    return new Promise((resolve, reject) => {
        console.log(`Ordenando: ${producto} de BootCamp.`);
        setTimeout(() =>{
            if(producto === 'taza'){
                resolve('Ordenando una taza con el logo del BootCamp');
            }else{
                reject('Este producto no esta disponible')
            }
        }, 2000)
    })
};

function procesarPedido(respuesta) {
    return new Promise(resolve => {
        console.log('Procesando respuesta...');
        console.log(`La respuesta fue: "${respuesta}"`);
        setTimeout(() =>{
            resolve('Gracias por tu compra!');//A este valor se accede a traves del metodo then 
        }, 4000)
    })
}

//Para que haga primero el proceso de ordenar el producto y luego procesar el pedido se prosigue así:

// ordenarProducto('taza')
//     .then(respuesta =>{
//         console.log('Respuesta recibida');
//         console.log(respuesta);
//         return procesarPedido(respuesta);
//     })//Realizamos una cadena de promesas. Lo que hace la anterior linea es llamar otra promesa
//     .then(respuestaProcesada => {
//         console.log(respuestaProcesada);
//     })
//     .catch(error =>{
//         console.log(error);
//     });

//SE DEFINE UNA FUNCION ASINCRONA
async function realizarPedido(producto) {
    try {
        const respuesta = await ordenarProducto(producto);//El await hace que el codigo espere a que una promesa se cumpla para poder seguir con la otra
        console.log('Respuesta recibida:');
        console.log(respuesta);
        const respuestaProcesada = await procesarPedido(respuesta);
        console.log(respuestaProcesada);
    } catch (error) {
        console.log(error);
    }
}

realizarPedido('taza');

