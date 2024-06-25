const express = require('express');
const router = express.Router();
const {getUsers,
    setUser,
    updateUser,
    deleteUser} = require('../controllers/userController');

//const { registerUser } = require('../userController');
//router.post('/register', registerUser);

router.route('/').get(getUsers).post(setUser);
router.route('/:id').delete(deleteUser).put(updateUser);

module.exports = router;