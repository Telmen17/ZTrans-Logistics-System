const asyncHandler = require("express-async-handler")

const User = require('../models/userModel')

// @desc     Get users
// @route    GET api/users
// @access   Private
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find()

    res.status(200).json(users)
})

// @desc     Set user
// @route    POST api/users
// @access   Private
const setUser = asyncHandler(async (req, res) => {
    if(!req.body.name) {
        res.status(400)
        throw new Error("Please add a name field.")
    }
    if(!req.body.email) {
        res.status(400)
        throw new Error("Please add an email field.")
    }

    const user = await User.create({
        name: req.body.name,
        email: req.body.email
    })

    res.status(200).json(user);
})

// @desc     Update users
// @route    PUT api/users/:id
// @access   Private
const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

    if(!user) {
        res.status(400)
        throw new Error('User not found')
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id,
        req.body, {new: true,})

    res.status(200).json(updatedUser);
})

// @desc     Delete user
// @route    DELETE api/users/:id
// @access   Private
const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

    if(!user) {
        res.status(400)
        throw new Error('User not found')
    }

    await user.deleteOne()

    res.status(200).json({id: req.params.id});
})

module.exports = {
    getUsers,
    setUser,
    updateUser,
    deleteUser,
}
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const asyncHandler = require("express-async-handler");
// const User = require("../../models/userModel");
//
// // Generate JWT
// const generateToken = (id) => {
//     return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
// };
//
// const registerUser = asyncHandler(async (req, res) => {
//     const { name, email, password } = req.body;
//
//     if (!name || !email || !password) {
//         res.status(400);
//         throw new Error("Please add all fields");
//     }
//
//     // check if user exists
//     const userExists = await User.findOne({ email });
//     if (userExists) {
//         res.status(400);
//         throw new Error("User already exists");
//     }
//
//     // create hash password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);
//
//     // create user
//     const user = await User.create({
//         name,
//         email,
//         password: hashedPassword,
//     });
//
//     if (user) {
//         res.status(201).json({
//             _id: user.id,
//             name: user.name,
//             email: user.email,
//             token: generateToken(user._id),
//         });
//     } else {
//         res.status(400);
//         throw new Error("Invalid user data");
//     }
// });
//
// const loginUser = asyncHandler(async (req, res) => {
//     const { email, password } = req.body;
//
//     if (!email || !password) {
//         res.status(400);
//         throw new Error("Please add all fields");
//     }
//
//     // Check for user email
//     const user = await User.findOne({ email });
//
//     if (user && (await bcrypt.compare(password, user.password))) {
//         res.json({
//             _id: user.id,
//             name: user.name,
//             email: user.email,
//             token: generateToken(user._id),
//         });
//     } else {
//         res.status(400);
//         throw new Error("Invalid credentials");
//     }
// });
//
// module.exports = {
//     registerUser,
// };