const express = require('express');
const dotenv = require('dotenv');

const app = express();
const route = require('./routes/userRoute');

dotenv.config({path:'./config/config.env'});
require('./config/conn');

app.use(express.json());
// Using routes
app.use('/api', route);


// takes PORT number from config.env file
app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port : ${process.env.PORT}`);
})