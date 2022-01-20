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
router.get('/getproducts', auth, getProducts);
router.get('/getproduct/:id', auth, getProduct);
router.put('/updateproduct/:id', auth, updateProduct);
router.delete('/:id', auth, deleteProduct);

module.exports = router;