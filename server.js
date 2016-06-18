
var express = require('express');
var app = express();

app.use('/', express.static('./public'));
app.get('/',function (req,res) {
    res.sendFile('./index.html')
})

app.listen(3000);
console.log('Server is running port:3000');
