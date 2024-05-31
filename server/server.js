const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

//Middlewares
const app = express();
dotenv.config();
app.use(cors());

const PORT = process.env.PORT;

app.get('/', (req, res)=>{
    res.send('Hello World');
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})