/*Importar la variable de entorno*/

require('dotenv').config()

/**Importacion de modelos */

require('./models');

/**Instanciando Express y Mongoose */

const express = require('express'),
 mongoose = require('mongoose'),
 routes = require('./routes'),
 cors = require('cors');
 

 /**Inicializamos Express */

const app = express();

/*Middleware*/
app.use(cors());
app.use(express.json());

/**Coneccion a la base de datos */
mongoose.connect(process.env.MONGO_URL);

/**definicion de rutas */

app.use('/shop', routes);

/**Inicializando el servidor */
app.listen(process.env.PORT, () =>{
    console.log('Servidor corriendo en puerto')
});