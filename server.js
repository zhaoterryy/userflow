const app = require('express')();
const routes = require('./routes')
const express = require('express')
const connectDB = require('./config/db')

const port = process.env.port || 8080;


connectDB(); //Connects DB

app.use(express.json()); //takes in JSON object as middleware



app.use('/',routes)


app.listen(port, ()=>
console.log(`App listening on port ${port}`)

)