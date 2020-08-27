class Auto {
    //private property which is only accesible inside the class befor it was @
    #privateSeats
    constructor(seatsNum, maxSpeeed, color) {
        this.#privateSeats = seatsNum;
        this.speed = maxSpeeed;
        this.color = color;

    }
    set seats(value){
        console.log('hey you can not change the seats for the auto');
        //this.#privateSeat = value
    }

    get seats(){
       return this.#privateSeats
    }
    
    showDescription = function () {
        console.log(`this auto contains ${this.seats} and its max speed is ${this.speed}`);
    }
    static showGeneralDescription() {
        console.log('this is auto so it has wheels and u can drive it');
    }

}
const newAuto = new Auto(4,280,'red')
//try to set a property
newAuto.seats = 6
// try to get
console.log(newAuto.seats);

