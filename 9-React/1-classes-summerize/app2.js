const arr = [5,6,1,9,12]
//console.log(arr);
const arr2 = [...arr]
arr[0] = 1
console.log(arr2)

class Auto {
    constructor(seatNum, maxSpeeed, color) {
        this.seat = seatNum;
        this.speed = maxSpeeed;
        this.color = color;

    }
    
    showDescription = function () {
        console.log(`this auto contains ${this.seat} and its max speed is ${this.speed}`);
    }
    static showGeneralDescription() {
        console.log('this is auto so it has wheels and u can drive it');
    }

}

const newAuto = new Auto(4,280,'red')
const anotherAuto = new Auto(5,290,'black')
//add new property
newAuto.doors = 2
//overwrite a method in Auto class
Auto.prototype.showDescription = function () {
    console.log(`I am a new Auto with ${this.speed} and i am ${this.color}`);
}
//add new method to Auto class
Auto.prototype.newDescription = function () {
    console.log(`I am a new Auto with ${this.speed} and i am ${this.color}`);
}
//console.log(newAuto);
anotherAuto.newDescription()
anotherAuto.showDescription()
String.prototype.fbw5 = function () {
    console.log('hi we r fbw5');
}
String.prototype.replace = function (x,z) {
    console.log('Replace is not working anywore');
}

"i am string".fbw5()
"i am string".replace('f','d')