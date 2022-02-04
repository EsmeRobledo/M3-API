const mongoose = require('mongoose');


    const OrderSchema = new mongoose.Schema({
        date: {type: String, require: true},
        userId: {UserID: {type:mongoose.ObjectId, ref:'User'}},
        productID:{ProductID: {type:mongoose.ObjectId, ref:'Product'}},        
        qty: {type: Number},
        salePrice: {type: Number}
    }

)


mongoose.model('orders', OrderSchema, 'collectionOrders');