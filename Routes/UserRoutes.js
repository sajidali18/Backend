const express = require('express');
const UserSignup  = require('../Controllers/UserControllers/SignUp');
const Userlogin = require('../Controllers/UserControllers/Login');
const getuser = require('../Controllers/UserControllers/getuser');
const deleteUser = require('../Controllers/UserControllers/deleteuser');
const RoleAssign = require('../Controllers/UserControllers/AssignRole');
const GetUserbyid = require('../Controllers/UserControllers/getuserbyid');
const updateuser = require('../Controllers/UserControllers/updateuser');

const router = express.Router();



router.post('/signup', UserSignup);
router.post('/login', Userlogin);
router.get('/users', getuser);
router.delete('/getuserbyid/:id', deleteUser)
router.put('/assign', RoleAssign);
router.get('/getuser/:userid', GetUserbyid);
router.put('/updateuser', updateuser);

module.exports = router;

