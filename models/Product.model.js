const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productName: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    qty: {type: Number},
    category: {type: String, required: true},
    type: {type: String, required: true},
    img: {type: String}
});

mongoose.model('Products', ProductSchema, 'collectionProduct');
