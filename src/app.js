const express = require('express');
const config = require('./config');
const v1ProductRouter = require("./v1/routes/productRoutes");
const { error } = require('./middleware/errors');
const cors = require('cors')

let corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

const app = express();
app.set('port', config.app.port);

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use("/api/v1/products", v1ProductRouter);
app.use(error)
app.use(cors(corsOptions));

module.exports = app;