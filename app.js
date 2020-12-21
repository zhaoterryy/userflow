const app = require('express')();
const routes = require('./routes')
const port = 8080;

app.use('/',routes)


app.listen(port, ()=>
console.log(`App listening on port ${port}`)
)