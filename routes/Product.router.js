const express = require('express'),
auth = require('../middlewares/auth'),
router = express.Router(),
{
    getProduct,
    updateProduct,
    deleteProduct,
    createProduct
} = require('../controllers');

router.post('/', auth, createProduct);
router.get('/', auth, getProduct);
router.put('/', auth, updateProduct);
router.delete('/:id', auth, deleteProduct);

module.exports = router;