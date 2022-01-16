const crypto = require('crypto');
const salt = 'afn43f9hn43f';


const encriptar = (password) =>{
    return crypto.pbkdf2Sync(password, salt, 10, 512, 'sha512').toString('hex')
}

const verificar = (password) =>{
    const passHashed = crypto.pbkdf2Sync(password, salt, 10, 512, 'sha512').toString('hex');
    return passHashed === 'passwordencrypted'
}

crypto.randomBytes(16).toString('hex')