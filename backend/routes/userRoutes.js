const express = require('express');
const router = express.Router();
const {getUsers,
    setUser,
    updateUser,
    deleteUser,
    registerUser,
    loginUser,
    getMe
} = require('../controllers/userController');
const {protect} = require('../middleware/authMiddleware')

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);


router.route('/').get(getUsers).post(setUser);
router.route('/:id').delete(deleteUser).put(updateUser);

module.exports = router;