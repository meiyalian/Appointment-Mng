// const User = require('./models/user');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');


// async function hashPassword(password) {
//     return await bcrypt.hash(password, 10);
//    }
   
// async function validatePassword(plainPassword, hashedPassword) {
//     return await bcrypt.compare(plainPassword, hashedPassword);
// }



// exports.login = async (req, res, next) => {
//     try {
//         const { email, password } = req.body;
//         const user = await User.findOne({ email });
//         if (!user) return next(new Error('Email does not exist'));
//         const validPassword = await validatePassword(password, user.password);
//         if (!validPassword) return next(new Error('Password is not correct'))
//         const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
//         expiresIn: "1d"
//         });
//         await User.findByIdAndUpdate(user._id, { accessToken })
//         res.status(200).json({
//         data: { email: user.email, role: user.role },
//         accessToken
//         })
//     } catch (error) {
//      next(error);
//     }
//    }

