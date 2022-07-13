'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../Controller/UserController');

router.post("/signin", controller.signIn);
router.put('/signup', controller.signUp);
router.put('/update', controller.updateUser);
router.post('/findbyemail', controller.findUserByEmail);
router.post('/updatetoadmin', controller.updateToAdmin);
router.delete('/delete', controller.deleteUser);
router.get("/findbyid/:id", controller.findByID);

module.exports = router;