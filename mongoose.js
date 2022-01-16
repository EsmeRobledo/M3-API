/** */
const mongoose = require('mongoose');
/**coneccion a la base de datos */
mongoose.connect('mongodb://localhost:27017/petshopdb')
/**Creamos el modelo */
const User = mongoose.model('User', {
    firstname: {type: String},
    lastname: {type: String},
    mail: {type: String},
    phone: {type: String},
    password: {type: String},

}, 'user');

/**Se intacia el objeto del modelo */

const admin = new User({
    firstname: 'Esmeralda',
    lastname: 'Robledo',
})


admin.save().then(() => console.log('Se guardo el elemento'))