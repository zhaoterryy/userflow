const app = require('express')();
const routes = require('./routes')
const connectDB = require('./config/db')
const port = 8080;


connectDB();

app.use('/',routes)


app.listen(port, ()=>
console.log(`App listening on port ${port}`)
)