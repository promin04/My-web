
var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
app.use('/', express.static('./public'));
app.get('/',function (req,res) {
    res.sendFile('./index.html')
})
app.use(function(req, res, next){
    if (req.url === '/favicon.ico') {
        res.writeHead(200, {'Content-Type': 'image/x-icon'} );
        res.end(/* icon content here */);
    } else {
        next();
    }
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
