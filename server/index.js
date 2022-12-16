const express = require('express');
const dotenv = require('dotenv');

const app = express();

dotenv.config({path:'./config/config.env'});

app.use(express.json());