const express = require('express')
const bp = require("body-parser");
const app = express();
const userRouter = require('./routes/userRouter');

app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));

app.use('/user',userRouter);

app.listen(7001);