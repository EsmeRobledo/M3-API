const mongoose = require('mongoose'),
Orders = mongoose.model('Orders');


const addOrder = async (req, res) => {
    try{
        const order = new Orders({
            ...req.body,
            userId: req.user.idUser,
            productID: req.product.productID

        })

    }catch(e){
        return res.json({
            message: 'Order can not be add',
            detail: e
        })
    }
}