"use strict";
// const models = require('./models');
// const sequelize = require('./connection');
const express = require('express');
const { router } = require('./router');

const app = express();

app.use(express.json());
app.use('/api', router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});