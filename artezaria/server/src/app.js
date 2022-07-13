'use strict';

// External module imports
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

// Import all routers
// const productRoute = require('./routers/product.route');
// const purchaseItemRoute = require('./routers/purchaseItem.route')
// const userRoute = require('./routers/user.route')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// define cors
app.use(cors({origin: ['http://localhost:3001', 'http://localhost:8080'], credentials: true}));

// define routers
// app.use('/purchaseItem', purchaseItemRoute);
app.use('/user', require("./Route/UserRoute"));
app.use('/product', require("./Route/ProductRoute"));
app.use('/purchase', require("./Route/PurchaseRoute"));

console.log("batata");

module.exports = app;