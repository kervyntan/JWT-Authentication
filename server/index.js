const express = require('express');
const dotenv = require('dotenv');

const app = express();

dotenv.config({path:'./config/config.env'});

app.use(express.json());

// takes PORT number from config.env file
app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port : ${process.env.PORT}`);
})