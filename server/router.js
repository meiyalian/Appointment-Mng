let express = require('express');
const bookingController = require('./controllers/bookingController');
const serviceController = require('./controllers/serviceController');
let router = express.Router();

const userController = require('./controllers/userController');



router.get('/api/test',(req,res) =>{
    res.send('ok')
})

router.post('/signup', userController.signup);
router.post('/login', userController.login);

router.get('/users', userController.allowIfLoggedin, userController.grantAccess('readAny', 'profile'), userController.getUsers);

//booking request routers 
router.post('/user/:id/booking',bookingController.addBookingRequest)

//user can see their own booking request 
router.get('/user/:id/allBooking',bookingController.userGetBookingList)

//admin add services 
router.post('/admin/addservice',serviceController.addService)

//get all services 
router.get('/allServices',serviceController.getServices)
module.exports = router;

