const express = require('express'),
auth = require('../middlewares/auth'),
router = express.Router(),
{
    getProduct,
    updateProduct,
    deleteProduct,
    createProduct,
    getProducts
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
router.get('/getproducts/:category', getProducts);
router.get('/getproduct/:id', getProduct);
router.put('/updateproduct/:id', auth, updateProduct);
router.delete('/:id', auth, deleteProduct);

module.exports = router;