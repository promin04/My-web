
var express = require('express');
var app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));
app.get('/',function (req,res) {
    res.sendFile('./index.html')
})
app.use(function(req, res, next){
    if (req.url === '/favicon.ico') {
        res.writeHead(200, {'Content-Type': 'image/x-icon'} );
        res.end();
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

app.listen(PORT);
console.log('Server is running port: '+PORT);
