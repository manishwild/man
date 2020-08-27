"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log('hi'); //first name should be capital later

var Auto = function Auto(seatNum, maxSpeeed, color) {
  _classCallCheck(this, Auto);

  this.seat = seatNum;
  this.speed = maxSpeeed;
  this.color = color;
};

var car1 = new Auto(5, 220, 'red');
var car2 = new Auto(8, 220, 'blue');
var car3 = {
  seats: 9,
  speed: 280,
  color: 'blue'
};
console.log(car3);