var express = require ('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.set('view engine', 'ejs');
app.get('/index', function (req, res){
  console.log(req.query);
  res.render({newsId: req.params.id});
});

app.listen(3000);
