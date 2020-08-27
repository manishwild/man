"use strict";

var express = require('express');

var app = express();

var validator = require('validator');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express["static"](__dirname + '/public'));
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.get('/', function (req, res) {
  res.render('home');
});
app.post('/', function (req, res) {
  console.log(req.body);
  var _req$body = req.body,
      title = _req$body.title,
      description = _req$body.description,
      category = _req$body.category;
  var errorMsgs = '';

  if (validator.isEmpty(title)) {
    errorMsgs = 'Title should not be empty\n';
  }

  if (!validator.isLength(title, {
    min: 2,
    max: 50
  })) {
    errorMsgs += 'Title length should  be between 2 and 50 chars\n';
  }

  if (validator.isEmpty(category)) {
    errorMsgs += 'You should chose a category\n';
  }

  if (validator.isEmpty(description)) {
    errorMsgs += 'Description should not be empty\n';
  }

  if (!validator.isLength(description, {
    min: 10,
    max: 1000
  })) {
    errorMsgs += 'Description length should  be between 10 and 1000 chars\n';
  }

  if (!errorMsgs) {
    res.json('correct Data');
  } else {
    res.json('incorrect data');
  }
});
app.listen(3000, function () {
  console.log('App listening on port 3000!');
});