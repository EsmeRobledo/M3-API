require('dotenv').config();
/**Instanciar express */
const express = require('express');
 /* Iniciar express*/
 const app = express();
 /* agregar middlewaress*/
app.use(express.json());
 /* definir las rutas*/
app.post('/',(req, res) => {
    res.json({
        mensaje: 'se agrego el elemento'
    });
});
app.get('/', (req,res) =>{
    res.json({
        mensaje: 'Se obtuvo el elemento'
    })
});
app.put('/', (req, res) =>{
    res.json({
        mensaje: 'Se actualizo el elemento'
    })
});
app.delete('/', (req, res) =>{
    res.json({
        mensaje: 'Se elimino el elemento'
    })
});
 /* iniciar servidor*/
app.listen(process.env.PORT, () =>{
    console.log('Se inicio el servidor')
})
