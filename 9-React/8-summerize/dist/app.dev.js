"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var User =
/*#__PURE__*/
function () {
  function User(fname, lname, email, password) {
    _classCallCheck(this, User);

    this.fName = fname;
    this.lName = lname;
    this.email = email;
    this.password = password;
  }

  _createClass(User, [{
    key: "fullName",
    value: function fullName() {
      return this.fName + ' ' + this.lName;
    }
  }]);

  return User;
}();

var someUser = new User('Manish', 'Shahi', 'manish@manish.com', '12345678');
var someUser1 = new User('Mani', 'man', 'msh@manish.com', '123678'); // add new method to the User which ganna reflect on all object that have beeen created from this class

User.prototype.checkUser = function (email) {
  if (email === this.email && password === this.password) {
    return true;
  } else {
    return false;
  }
}; ///////////////********static Object */
// let someUser = {
//     email:'manish@manish.com',
//     fName:'Manish',
//     lName: 'shahi',
//     password: '12345678' ,
//     fullName:function() {
//         return this.fName + ' ' + this.lName
//     }
// }
//override Fullname method from class user and also it will reflect on all object that have been created from this class


User.prototype.fullName = function () {
  return 'I am ' + this.fName + ' ' + this.lName;
}; //console.log(someUser.fullName());
//console.log(someUser.checkUser('ttt','tttt'));


var Employee =
/*#__PURE__*/
function (_User) {
  _inherits(Employee, _User);

  function Employee(fname, lname, email, password, officeNum, department) {
    var _this;

    _classCallCheck(this, Employee);

    // we must call the constructure of the parent class using super
    //basically copy of constructor inherit the parent class
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Employee).call(this, fname, lname, email, password));
    _this.officeNum = officeNum;
    _this.department = department;
    return _this;
  }

  _createClass(Employee, [{
    key: "showDetails",
    value: function showDetails() {
      return "I am an employee and my name is ".concat(this.fName, ", I am working in ").concat(this.department);
    }
  }]);

  return Employee;
}(User);

var someEmployee = new Employee('Manish', 'shahi', 'man@man.com', '12345', 'fbw5', 'fbw5 class');
console.log(someEmployee.showDetails());

User.prototype.changePassword = function (newPassword) {
  this.password = newPassword;
};

someEmployee.changePassword('asdasas');
someEmployee.password = 'asdasas';
console.log(someEmployee.password);