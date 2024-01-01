const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');

const noteRouter = require('./routes/noteRoute');

require('dotenv').config();
const PORT = process.env.PORT || 3000;

const server = express();


//Middleware
server.use(express.json());
server.use(cors());

server.use("/notes", noteRouter.router);


server.get('/', async(req, res) => {
    res.json({Success: true});
})






//Conncting server to mongoDB
main().catch((error) => {
    console.log( error );
})

async function main() {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('Database connected');
}


// Running server on mentioned PORT
server.listen(PORT, (req, res) => {
    console.log(`Server Running on port ${PORT}`)
})