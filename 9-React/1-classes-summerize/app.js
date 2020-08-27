console.log('hi');

//first name should be capital latter
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

let car1 = new Auto(5, 220, 'red')
let car2 = new Auto(8, 220, 'blue')
let car3 = { 
    seat: 9,
    speed: 280,
    color: 'blue'
}
car2.wheels = 6
console.log(car2.wheels);
//car2.showDescription()
//car1.showGeneralDescription()
class User { 
    constructor(fname, lname, email, address,role) {
        this.fname = fname
        this.lname = lname
        this.email = email
        this.address = address
        this.role = role
    }
    
}

class UserRole {
   constructor(roleName, privelage){
        this.roleName = roleName
        this.privelage = privelage
    }
    static getAdminRole(){
        return new UserRole('Admin', ['add Teacher', 'delete teacher','edit teacher','add student','delete student','edit student'])
    }
    static getTeacherRole(){
        return new UserRole('teacher', ['add student','delete student','edit student'])
    }
    static getStudentRole(){
        return new UserRole('student', ['view course'])
    }
}



const manish = new User('Manish', 'Shahi', 'manishh@man.com', 'kolo', UserRole.getStudentRole() )
console.log(manish);