const jwt = require('express-jwt')
 secret = process.env.SECRET_JWT;

 const auth = jwt({
     secret: secret,
     algorithms: ['HS256'],
     userProperty: 'user',
     
     getToken: function(req){
         let { authorization } = req.headers;

         if(authorization){
             const [type, token] = authorization.split(' ');
             return type === 'Bearer' || type === 'Token' ? token : null;
         }
         return null
     }
 });

 module.exports = auth;