"use strict";

var _module = require("./modules/module1");

var _validator = _interopRequireDefault(require("validator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

document.querySelector('#submitBtn').addEventListener('click', function (e) {
  e.preventDefault();
  var title = document.querySelector('#titleInp').value;
  var category = document.querySelector('#categorySelect').options[document.querySelector('#categorySelect').selectedIndex].value;
  var description = document.querySelector('#descriptionText').value;
  var categoryObg;

  switch (category) {
    case 'news':
      categoryObg = _module.Category.News();
      break;

    case 'sport':
      categoryObg = _module.Category.Sport();
      break;

    case 'politics':
      categoryObg = _module.Category.Politics();
      break;

    case 'Beauty':
      categoryObg = _module.Category.Beauty();
      break;

    default:
      categoryObg = new _module.Category('No Category');
      break;
  } // const config = {
  //     fields: {
  //       title: {
  //         isRequired: { message: 'Please fill out a Article Title' },
  //         isMinLength: { value: 10, message: 'please write minimum 10 word' }
  //       },
  //       discription: {
  //         isRequired: { message: 'Please fill out a message' },
  //         isMinLength: { value: 10, message: 'please write minimum 10 w0r' }
  //       }
  //     },
  //     onSubmit: e => { /* handle submit */ }
  //   };
  //   const { getFieldProps, getFormProps, errors } = useValidation(config);


  var errorMsgs = '';

  if (_validator["default"].isEmpty(title)) {
    errorMsgs = 'Title should not be empty\n';
  }

  if (!_validator["default"].isLength(title, {
    min: 2,
    max: 50
  })) {
    errorMsgs += 'Title length should  be between 2 and 50 chars\n';
  }

  if (_validator["default"].isEmpty(category)) {
    errorMsgs += 'You should chose a category\n';
  }

  if (_validator["default"].isEmpty(description)) {
    errorMsgs += 'Description should not be empty\n';
  }

  if (!_validator["default"].isLength(description, {
    min: 10,
    max: 1000
  })) {
    errorMsgs += 'Description length should  be between 10 and 1000 chars\n';
  }

  if (!errorMsgs) {
    fetch('/', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        category: category,
        description: description
      })
    }).then(function (response) {
      if (response.status === 200) {
        var container = document.querySelector('#container');
        var article = new _module.Article(title, description, categoryObg);
        article.render(container);
        response.json().then(function (data) {
          alert(data);
        })["catch"](function (error) {
          alert(error);
        });
      }
    })["catch"](function (error) {
      alert(error);
    }); // send the article data to backend
  } else {
    alert(errorMsgs);
  }
});