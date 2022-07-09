'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../Controller/UserController');

router.post("/signin", controller.signIn);
router.put('/signup', controller.signUp);
router.put('/update', controller.update);

// router.post('/:id', controller.getuserbyemail);
// router.put('/:id', controller.put);
// router.delete('/:id', controller.delete);

module.exports = router;