const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = "/api/usuarios";

        //Conectar a base de datos
        this.conectarDB();
        //Middlewares
        this.middlewares();
        //Rutas de app
        this.routes();
    }
    

    async conectarDB() {
        await dbConnection();
    }

    middlewares(){
        //CORS
        this.app.use( cors() );

        //Lectura y parseo del BODY (intenta serializar la info que trae el put, post o delete)
        this.app.use( express.json() );

        //Directorio público
        this.app.use( express.static("public") );


    }


    routes() {

        this.app.use(this.usuariosPath, require("../routes/usuarios"));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en http://localhost:${this.port}`);
        });
        
    }

}


module.exports = Server;
