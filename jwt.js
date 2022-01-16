const jwt = require('jsonwebtoken');
const secret = 'esunacadenaaleatoria'
const generarJWT = () =>{
    jwt.sign({
        info1: 'Mi info',
        info2: 'Mi otra info',
    }, secret)
}

generarJWT()

const verificarJWT = (token) => {
    return jwt.verify(token, secret)
}

