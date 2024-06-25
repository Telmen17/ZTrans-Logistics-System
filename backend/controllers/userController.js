// @desc     Get users
// @route    GET api/users
// @access   Private
const getUsers = (req, res) => {
    res.status(200).json({message: "Get Users"})
}

// @desc     Set user
// @route    POST api/users
// @access   Private
const setUser = (req, res) => {
    console.log(req.body);

    res.status(200).json({message: "Set User"});
}

// @desc     Update users
// @route    PUT api/users/:id
// @access   Private
const updateUser = (req, res) => {
    res.status(200).json({message: `Update user ${req.params.id}`});
}

// @desc     Delete user
// @route    DELETE api/users/:id
// @access   Private
const deleteUser = (req, res) => {
    res.status(200).json({message: `Delete user ${req.params.id}`});
}

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