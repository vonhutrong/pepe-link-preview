var express = require('express');
var app = express();
const pepe = require('./src/emoji/pepe');

//app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(req, res) {
  res.render('pages/index', {
    emojis: pepe
  });
});

app.get('/:meme', function(req , res){
  res.render('pages/meme', {
    meme: req.params.meme,
    link: pepe[req.params.meme]}
  );
});

app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.listen(8080);
console.log('Server is listening on port 8080: http://localhost:8080');