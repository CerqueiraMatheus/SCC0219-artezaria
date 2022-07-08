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
app.use(cors({origin: ['http://localhost:3000', 'http://localhost:8080'], credentials: true}));

// define routers
// app.use('/product', productRoute);
// app.use('/purchaseItem', purchaseItemRoute);
app.use('/user', require("./Route/UserRoute"));

console.log("batata");

module.exports = app;