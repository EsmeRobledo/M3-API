const{
    signup,
    getUsers,
    updateUser,
    deleteUser,
    login
} = require('./User.controller');

const {
    getProduct,
    updateProduct,
    deleteProduct,
    createProduct
} = require('./Product.controller')

module.exports ={
    signup,
    getUsers,
    updateUser,
    deleteUser,
    login,
    getProduct,
    updateProduct,
    deleteProduct,
    createProduct
}