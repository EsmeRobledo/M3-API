const{
    signup,
    getUsers,
    updateUser,
    deleteUser,
    login,
    getUserProfile,
    getCategory,
    changePassword
} = require('./User.controller');

const {
    getProduct,
    updateProduct,
    deleteProduct,
    createProduct,
    getProducts
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
    createProduct,
    getUserProfile,
    getProducts,
    getCategory,
    changePassword

}