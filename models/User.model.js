require('dotenv').config();
/*Instanciar Mongoose*/
const mongoose = require('mongoose'),
jwt = require('jsonwebtoken'),
crypto = require('crypto'),
uniqueValidator = require('mongoose-unique-validator');


/**Schema de Usuarios */
const UserSchema = new mongoose.Schema({
    firstname: {type: String, require: true},
    lastname: {type: String, require: true},
    mail: {type: String,
        required: [true, 'Se requiere el email'],
        unique: true,
        match:[/\S+@\S+\.\S+/, 'Email invalido']},
    phone: {type: String, require: true},
    type: {
        type: String,
        default: 'client',
        enum: [
            'client',
            'admin',
            'cajero',
        ]
    },
    password: {type: String},
    address:{Street: {type: String, required: true},
            City: {type: String, require: true},
            State: {type: String, require: true},
            PC: {type: Number, require: true}},
    orders:{ProductID: {type:String},
            qty:{type: Number}},        
    salt: {type: String}
});
UserSchema.plugin(uniqueValidator, {message: 'No se permiten duplicados'});

/*Metodo para generar el token del password*/
UserSchema.methods.generateJWT = function() {
    return jwt.sign({idUser: this._id, type: this.type}, process.env.SECRET_JWT);
}
/**Metodo para encriptar la contraseña */
UserSchema.methods.hashPassword = function (password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.password = crypto.pbkdf2Sync(password, this.salt, 10, 512, 'sha512').toString('hex');
}

/*Metodo para verificar la contraseña*/
UserSchema.methods.verifyPassword = function (password){
    const hashedPassword = crypto.pbkdf2Sync(password, this.salt, 10, 512, 'sha512').toString('hex')
    return hashedPassword === this.password;
}


mongoose.model('users', UserSchema, 'collectionUser');