var express = require('express');
var app = express();
const pepe = require('./src/emoji/pepe');

//app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(req, res) {
  var mascots = [
    { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
    { name: 'Tux', organization: "Linux", birth_year: 1996},
    { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
  ];
  var tagline = "No programming concept is complete without a cute animal mascot.";

  res.render('pages/index', {
    mascots: mascots,
    tagline: tagline,
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