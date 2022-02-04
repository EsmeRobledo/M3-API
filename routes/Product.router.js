const express = require('express'),
auth = require('../middlewares/auth'),
router = express.Router(),
{
    getProduct,
    updateProduct,
    deleteProduct,
    createProduct,
    getProducts,
    getProductsList
} = require('../controllers');

const multer = require('multer');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        const directory =`${__dirname}/../uploads`;

        if(!fs.existsSync(directory)){
            fs.mkdirSync(directory, {recursive: true});
        }
        cb(null, directory);
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
})

const upload = multer({storage});


router.post('/newproduct', upload.single('img'), createProduct);
router.get('/getproducts/:category', getProducts); //Retorna la lista de productos dependiendo de la categoria solicitada
router.get('/productsList', getProductsList)//Regresa la lista completa de todos los productos
router.get('/getproduct/:id', getProduct);
router.put('/updateproduct/:id', auth, updateProduct);
router.get('/productInfo/:id', getProduct)//Retorna la informacion individual de cada producto
router.delete('/:id', auth, deleteProduct);

module.exports = router;