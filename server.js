
var express = require('express');
var app = express();

var port = process.env.port || 3000;
app.use('/', express.static('./public'));
app.get('/',function (req,res) {
    res.sendFile('./index.html')
})

app.use(function (req,res,next) {
  if (req.headers['x-forwarded-proto']==='http') {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
})

app.listen(port);
console.log('Server is running port: '+port);
