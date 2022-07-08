'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../Controller/UserController')

// router.post('/:id', controller.getuserbyemail);
// router.post('/', controller.post);
// router.put('/:id', controller.put);
// router.delete('/:id', controller.delete);
router.post("/signin", controller.signIn);

module.exports = router;