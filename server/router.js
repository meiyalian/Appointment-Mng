let express = require('express');
let router = express.Router();
const User = require('./models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


async function hashPassword(password) {
    return await bcrypt.hash(password, 10);
   }
   
// register user 
router.post('/user/register',async(req,res) =>{

    try{
        const { email, password, role } = req.body;
        const hashedPassword = await hashPassword(password);
        const newUser = new User({ email: email, password: hashedPassword, role: role || "basic" });
        const accessToken = await jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: "1d"
        });
        newUser.accessToken = accessToken;

        
        await newUser.save();
        res.json({
            data: newUser
        })
    } catch(e){
        console.log(e)
        res.status(500).json({
            ok: false,
            message: "fail to create",
          })
    }
    
})


router.get('/api/test',(req,res) =>{
    res.send('ok')
})

module.exports = router;