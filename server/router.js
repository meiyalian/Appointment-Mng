let express = require('express');
let router = express.Router();

const userController = require('./controllers/userController');



router.get('/api/test',(req,res) =>{
    res.send('ok')
})

router.post('/signup', userController.signup);
router.post('/login', userController.login);

router.get('/users', userController.allowIfLoggedin, userController.grantAccess('readAny', 'profile'), userController.getUsers);

module.exports = router;