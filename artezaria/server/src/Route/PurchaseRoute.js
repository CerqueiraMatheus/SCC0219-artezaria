'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../Controller/PurchaseController');

router.post("/buy", controller.buyCart);
router.post("/listbyuser", controller.listPurchasesUser);
router.post("/listbyproduct", controller.listPurchasesItem);
router.post("/markitemsent", controller.markItemSent);

module.exports = router;