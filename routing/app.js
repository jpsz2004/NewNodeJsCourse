const http = require('http');
const cursos = require('./cursos');

const servidor = http.createServer((req, res) =>{
    const {method} = req;
    if(method === 'GET') return manejarSolicitudGET(req, res);
    else console.log(`El metodo usado no puede ser manejado por el servidor: ${method}`);
});

const manejarSolicitudGET = (req, res) =>{
    const path = req.url;
    if(path === '/'){//Pagina web principal de la aplicacion
        res.statusCode = 200;
        res.end('Bienvenidos a mi primer servidor y API creados con Node.js')
    }else if(path === '/cursos'){
        res.statusCode = 200;
        res.end(JSON.stringify(cursos.infoCursos));
    }
}

const puerto = 4000;

servidor.listen(puerto, () =>{
    console.log(`El servidor esta escuchando en el puerto ${puerto}...`);
})