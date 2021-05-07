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
router.post('/user/:id/booking',userController.allowIfLoggedin,bookingController.addBookingRequest)

//user can see their own booking request 
router.get('/user/:id/allBooking',userController.allowIfLoggedin, bookingController.userGetBookingList)

//view detail information(personal & biller )
router.get('/user/:id/detailInfo',userController.allowIfLoggedin, userController.viewDetailInfo)

router.post('/user/:id/updatePersonalInfo',userController.allowIfLoggedin, userController.updatePersonalInfo)

router.post('/user/:id/updateBillerInfo',userController.allowIfLoggedin, userController.updateBillerInfo)











//admin add services 
router.post('/admin/addservice',serviceController.addService)

//get all services 
router.get('/allServices',userController.allowIfLoggedin,serviceController.getServices)


//get service delivery options (return an array of delivery options (delivery/pickup))
router.get('/getServiceDeliveryOptions/:id',userController.allowIfLoggedin,serviceController.getServicesDeliveryOptions)


module.exports = router;