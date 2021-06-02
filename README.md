# MngApp


## Introduction 

A web app using the MEAN stack that provides voucher booking services. 



## How to run 


Git clone the project and run `npm install ` to install all the packages required.



create a .env file in the root directory: 

```
// .env
JWT_SECRET= swen90016

```

Then, run : `node server.js | ng build --watch` and open http://localhost:9000/ to view the app 

There are two types of user: admin and normal user. You can register to be a normal user in the user interface. However, you need to manually set up an admin user by doing an API call to localhost:9000//signup. 

The UI provides the following functions:
1. sign up to be a normal user
2. user/admin login 
3. user/admin updates personal information
4. user sends/cancels booking request --> an email with booking information will be sent to the Admin
5. admin views all booking requests as a list 
6. admin accepts a booking request --> an email will be sent to the customer (user)
7. admin adds services to the system
