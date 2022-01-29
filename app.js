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
app.use(express.static(`${__dirname}/uploads`));

/**Coneccion a la base de datos */
mongoose.connect(process.env.MONGO_URL);

/**definicion de rutas */

app.use('/shop', routes);

/**Inicializando el servidor */
app.listen(process.env.PORT, () =>{
    console.log('Server is ready on port ' + process.env.PORT)
});