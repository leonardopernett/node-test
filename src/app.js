const express = require('express');
const app = express();


app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(require('./router/index.router'))

app.listen(3000)
console.log('server on port 3000')

module.exports ={ app}