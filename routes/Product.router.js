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

router.post('/newproduct', auth, createProduct);
router.get('/getproducts/:category', getProducts);
router.get('/getproduct/:id', getProduct);
router.put('/updateproduct/:id', auth, updateProduct);
router.delete('/:id', auth, deleteProduct);

module.exports = router;