"use strict";

var express = require('express');

var session = require('express-session');

var fileupload = require('express-fileupload');

var cookie = require('cookie-parser');

var fs = require('fs'); //include dataModule


var dataModule = require('./modules/mongooseDataModule');

var authRoute = require('./routs/auth');

var adminRout = require('./routs/adminRoute');

var app = express();
app.use(express["static"]('./public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json()); // create session object options

var sessionOptions = {
  secret: 'bookstore',
  resave: false,
  saveUninitialized: false,
  cookie: {}
}; // use a session

app.use(session(sessionOptions)); // use cookie parser

app.use(cookie()); // set fileupload middleware

app.use(fileupload({
  limits: {
    fileSize: 50 * 1024 * 1024
  }
}));
app.use('/admin', adminRout);
app.use('/auth', authRoute);
app.get('/', function (req, res) {
  res.render('main');
});
app.get('/shop', function (req, res) {
  dataModule.getAllBooks().then(function (books) {
    res.render('shop', {
      books: books
    });
  });
});
app.get('/register', function (req, res) {
  res.render('register');
});
app.post('/register', function (req, res) {
  // your post register handler here
  //console.log(req.body);
  // 2 data error
  // 1 user registered succefully
  // 3 user is exist
  // 4 server is error
  var email = req.body.email.trim();
  var password = req.body.password;
  var repassword = req.body.repassword;

  if (email && password && password == repassword) {
    dataModule.registerUser(email, password).then(function () {
      res.json(1);
    })["catch"](function (error) {
      if (error == "exist") {
        res.json(3);
      } else [res.json(4)];
    });
  } else {
    res.json(2);
  }
});
app.get('/book/:booktitle/:id', function (req, res) {
  //res.send(req.params.id);
  dataModule.getBook(req.params.id).then(function (book) {
    var checkLogin = false;

    if (req.session.user) {
      checkLogin = true;
    }

    res.render('book', {
      book: book,
      checkLogin: checkLogin
    });
  })["catch"](function (error) {
    res.send('404,Book could not be found');
  });
});
app.get('/login', function (req, res) {
  if (req.session.user) {
    res.redirect('/admin');
  } else [res.render('login')];
});
app.post('/login', function (req, res) {
  console.log(req.body);

  if (req.body.email && req.body.password) {
    dataModule.checkUser(req.body.email.trim(), req.body.password).then(function (user) {
      req.session.user = user;
      res.json(1);
    })["catch"](function (error) {
      if (error == 3) {
        res.json(3);
      } else {
        res.json(4);
      }
    });
  } else {
    res.json(2);
  }
});
app.listen(5000, function () {
  console.log('App listening on port 5000!');
});