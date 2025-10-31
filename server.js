// Importar el módulo de Express
import express from "express";
// Crear una instancia de la aplicación Express
const app = express();
// Middleware para poder procesar datos en formato JSON
app.use(express.json());

//const clientesRoutes = require('./routes/clientesRoutes');
//app.use('/clientes', clientesRoutes);

// Definir una ruta básica (endpoint) de prueba
app.get("/", (req, res) => {
res.send("🚀 Servidor Express funcionando correctamente");
});

app.get("/usuarios", (req, res) => {
    res.send("Listado de usuarios, 1, 2, 3, 4, 5");
});

// Definir el puerto donde escuchará el servidor
const PORT = 3000;
// Iniciar el servidor y escuchar peticiones en el puerto definido
app.listen(PORT, () => {
console.log(`✅ Servidor en ejecución: http://localhost:${PORT}`);
});


/* para comprobar que funciona, xampp inciado, en el node.js pront estando en el directori
de este proyecto, escribir nodemon.js. y en el navegador poner:
http://localhost:3000/
http://localhost:3000/usuarios




/*
// Definir una ruta básica (endpoint) de prueba
app.get("/", (req, res) => {
    res.send("Hola soy Pepe");
});

//http://localhost:3000/clientes?nombre=pepe&apellido=velazquez
app.get("/clientes", (req, res) => {
    const nombre=req.query.nombre;
    const apellido=req.query.apellido;

    if(apellido==null){
        res.send("Listado de clientes "+ nombre);
    }else{
        res.send("Listado de clientes "+ nombre + " " + apellido);
    }
});

app.get("/clientes/:id", (req, res) => {
    const id=req.params.id;
    res.send("Listado de clientes: " + id);
});

app.get("/productos", (req, res) => {
    res.send("Listado de productos");
});

app.post("/productos", (req, res) => {
    const contenido=req.body;
    const otronombre=req.query.otronombre;

    for (let index = 0; index < contenido.length; index++) {
        const element = contenido[index];
    }

    //console.log(contenido);
    res.send("Listado de productos, es una llamada por POST, " + otronombre + " " + contenido.nombre + " "+ contenido.apellido);
});

app.put("/productos", (req, res) => {
    res.send("Listado de productos, es una llamada por PUT");
});

app.get("/pedidos", (req, res) => {
    res.send("Listado de pedidos");
});

// Definir el puerto donde escuchará el servidor
const PORT = 3000;
// Iniciar el servidor y escuchar peticiones en el puerto definido
app.listen(PORT, () => {
console.log(`✅ Servidor en ejecución: http://localhost:${PORT}`);
});

*/