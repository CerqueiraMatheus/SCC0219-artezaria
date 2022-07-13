'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../Controller/ProductController');

router.post("/create", controller.createProduct);
router.post("/findpublished", controller.findPublishedProducts);
router.post("/find", controller.findProduct);
router.post("/findbyname", controller.findProductByName);
router.delete("/delete", controller.deleteProduct);
router.get("/mostsold", controller.getMostSold);
router.get("/mostrecent", controller.getMostRecent);
router.get("/byartist/:id", controller.getByArtist);

module.exports = router;