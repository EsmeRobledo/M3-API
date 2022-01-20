const mongoose = require('mongoose'),
Product = mongoose.model('Products');

const createProduct = async(req, res) =>{
    try{
        const product = new Product(req.body);
        const resp = await product.save();

        return res.json({
            message: 'Procuct created successfully',
            detail: resp
        })

    }catch(e){
        return res.json({
            message: 'Error',
            detail: e.menssage
        })
    }
}

const getProducts = async(req, res) =>{
    try{
            const resp = await Product.find();
            
            if(resp.length === 0){
                return res.json({
                    message: 'Error',
                    detail: 'No hay registros'
                })
            }
            return res.json({
                resp

            })
    }catch(e){
        return res.json({
            message: 'Error',
            detail: e.message
        })
    }
}

const getProduct = async(req, res) =>{
    try{
            const resp = await Product.findById(req.params.id);
           
          
            return res.json({
                detail: resp
            })
            
    }catch(e){
        return res.json({
            message: 'Error',
            detail: e.message
        })
    }
}

const updateProduct = async(req, res) =>{
    try{
        const newData = req.body;
        const resp = await Product.findByIdAndUpdate(newData.productId, {$set: newData}, {new: true});

        return res.json({
            message: 'Product Update successfully',
            detail: resp
        })
    }catch(e){
        return res.json({
            message: 'Error',
            detail: e.message

        })
    }
}

const deleteProduct = async(req, res) => {
    try{
        const resp = await Product.findByIdAndDelete(req.params.id)
        return res.json({
            menssage: 'Product deleted successfully',
            detail: resp
        })
    }catch(e){
        return res.json({
            message: 'Error',
            detail: e.message
        })
    }
}

module.exports ={
    getProduct,
    updateProduct,
    deleteProduct,
    createProduct,
    getProducts
}