const express = require('express'),
auth = require('../middlewares/auth'),
router = express.Router(), 
{
    signup,
    getUsers,
    updateUser,
    deleteUser,
    login,
    getUserProfile
} = require('../controllers');

router.post('/signup', signup);
router.post('/login', login);
router.get('/',auth, getUsers);
router.get('/profile',auth, getUserProfile)
router.put('/edituser', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;