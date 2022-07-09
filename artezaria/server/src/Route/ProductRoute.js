'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../Controller/ProductController');

router.post("/create", controller.createProduct);
router.post("/findpublished", controller.findPublishedProducts);
router.post("/find", controller.findProduct);

module.exports = router;