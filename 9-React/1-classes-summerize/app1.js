class Auto {
    constructor(seatNum, maxSpeeed, color) {
        this.seat = seatNum;
        this.speed = maxSpeeed;
        this.color = color;

    }
    wheels =4
    showDescription = function () {
        console.log(`this auto contains ${this.seat} and its max speed is ${this.speed}`);
    }
    static showGeneralDescription() {
        console.log('this is auto so it has wheels and u can drive it');
    }

}
//extend it will give property of auto
class Truck extends Auto{
    constructor(seatNum, maxSpeeed, color, weight, height){
        //call the constructor of parent class super
        super(seatNum, maxSpeeed, color)
        this.weight = weight
        this.height = height
    }

}

class MyString extends String {
    constructor(value){
        super(value)
        this.value = value
    }
    log = function () {
        console.log(this.value)
    }
}

const someTruck = new Truck(2,260,'yellow',7000,3)
//console.log(someTruck);
//we can not copy object to a new object like the following
const anotheTruck = {...someTruck} 
someTruck.speed = 280
anotheTruck.showDescription()
console.log(anotheTruck.speed);
//const name = new MyString('manish')
// console.log(name.toUpperCase())
// name.log()
let x = 5
let c = x
x = 9
//console.log(x);