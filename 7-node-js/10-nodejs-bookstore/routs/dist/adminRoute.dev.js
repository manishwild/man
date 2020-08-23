"use strict";

var express = require('express');

var dataModule = require('../modules/mongodbDatamodule');

var adminRoute = express.Router();
adminRoute.use(function (req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/login');
  }
});
adminRoute.get('/', function (req, res) {
  res.render('admin', {
    email: req.session.user.email
  });
});
adminRoute.get('/addbook', function (req, res) {
  res.render('addbook');
});
adminRoute.post('/addbook', function (req, res) {
  //responses map
  // 1 book saved successfully
  // 2 data error
  // console.log(req.body)
  // console.log(req.files);
  // console.log(Object.keys(req.files));
  if (req.files) {
    var bookTitle = req.body.bookTitle;
    var bookDescription = req.body.bookDescription;
    var bookPdf = req.files.bookPdf;

    if (bookTitle && bookDescription && bookPdf && Object.keys(req.files).length > 1) {
      var imgs = [];

      for (var key in req.files) {
        if (req.files[key].mimetype != 'application/pdf') {
          imgs.push(req.files[key]);
        }
      }

      dataModule.addBook(bookTitle, bookDescription, bookPdf, imgs, req.session.user._id).then(function () {
        res.json(1);
      })["catch"](function (error) {
        if (error == 3) {
          res.json(3);
        }
      });
    } else {
      res.json(2);
    }
  } else {
    res.json(2);
  }
});
adminRoute.get('/mybooks', function (req, res) {
  dataModule.userBooks(req.session.user._id).then(function (books) {
    res.render('mybooks', {
      books: books
    });
  })["catch"](function (error) {
    res.send('404.page not found');
  });
});
adminRoute.get('/logout', function (req, res) {
  req.session.destroy();
  res.redirect('/login');
});
adminRoute.get('/mybook/:id', function (req, res) {
  var bookid = req.params.id;
  dataModule.getBook(bookid).then(function (book) {
    res.render('editbook', {
      book: book
    });
  })["catch"](function (error) {
    res.send('404.this book is not exit');
  });
});
adminRoute.post('/editbook', function (req, res) {
  var _req$body = req.body,
      bookTitle = _req$body.bookTitle,
      oldImgsUrls = _req$body.oldImgsUrls,
      bookDescription = _req$body.bookDescription,
      bookid = _req$body.bookid; //console.log(bookTitle,oldImgsUrls,bookDescription,bookid);

  console.log(req.files);
  var newPdfBook = null;
  var newImgs = [];

  if (req.files) {
    newPdfBook = req.files.bookPdf;

    for (var key in req.files) {
      if (req.files[key].mimetype != 'application/pdf') {
        newImgs.push(req.files[key]);
      }
    }
  }

  var oldImgsUrlArr = JSON.parse(oldImgsUrls); //console.log(oldImgsUrlArr);
  //delete the domain from the imgs url

  oldImgsUrlArr = oldImgsUrlArr.map(function (element) {
    return element.substr(element.indexOf('/uploaded/'));
    console.log(element);
  }); //console.log(oldImgsUrlArr);

  dataModule.UpdateBook(bookid, bookTitle, oldImgsUrlArr, bookDescription, newPdfBook, newImgs, req.session.user._id).then(function () {
    res.json(1);
  })["catch"](function (error) {
    res.json(2);
  });
});
adminRoute.post('/deletebook', function (req, res) {
  var bookid = req.body.bookid;
  dataModule.deleteBook(bookid, req.session.user._id).then(function () {
    res.json(1);
  })["catch"](function (error) {
    res.json(2);
  });
});
module.exports = adminRoute;