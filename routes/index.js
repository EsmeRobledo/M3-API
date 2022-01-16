const express = require('express'),
router = express.Router(),
userRoutes = require('./User.router'),
productRouter = require('./Product.router');

router.use('/user', userRoutes);
router.use('/product', productRouter);


module.exports = router;