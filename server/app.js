const express = require('express');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();

console.log(process.env.MONGODB_URI);

app.use(cors());

const authRouter = require('./routes/authRouter');
const todoRouter = require('./routes/todoRouter');

// middleware convert incoming data to be json format
app.use(express.json());
app.use(bodyParser.json());

app.use('/auth', authRouter);
app.use('/todos', todoRouter);

module.exports = (app);