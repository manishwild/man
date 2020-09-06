class User {
    #privatePassword
    constructor(fname, lname, email, password) {
        this.fName = fname
        this.lName = lname
        this.email = email
        this.#privatePassword = password
    }


    set password(value) {
        console.log('hey you can not change password for the user,you need to use /changePassword/ method');

    }
    get password() {
        return this.#privatePassword
    }
    fullName() {
        return this.fName + ' ' + this.lName
    }
    changePassword(newPassword) {
        this.#privatePassword = newPassword
    }
    static description(){
        return 'this is statsic'
    }

}

let someUser = new User('Manish', 'Shahi', 'manish@manish.com', '12345678')
let someUser1 = new User('Mani', 'man', 'msh@manish.com', '123678')

// add new method to the User which ganna reflect on all object that have beeen created from this class
User.prototype.checkUser = function (email) {
    if (email === this.email && password === this.password) {
        return true
    } else {
        return false
    }
}
///////////////********static Object */
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
    return 'I am ' + this.fName + ' ' + this.lName
}
//console.log(someUser.fullName());
//console.log(someUser.checkUser('ttt','tttt'));

class Employee extends User {
    constructor(fname, lname, email, password, officeNum, department) {
        // we must call the constructure of the parent class using super
        //basically copy of constructor inherit the parent class
        super(fname, lname, email, password)
        this.officeNum = officeNum
        this.department = department
    }
    showDetails() {
        return `I am an employee and my name is ${this.fName}, I am working in ${this.department}`
    }
    static employeeDescription(){
        return 'this is employee statsic'
    
    }

}

const someEmployee = new Employee('Manish', 'shahi', 'man@man.com', '12345', 'fbw5', 'fbw5 class')
console.log(someEmployee.fullName());
console.log(someEmployee.showDetails());

// User.prototype.changePassword=function (newPassword) {
//      this.#privatePassword  = newPassword
// }
someEmployee.changePassword('asdasas')
someEmployee.password = 'asdasas'
console.log(someEmployee.password);
console.log(User.description());
console.log(Employee.employeeDescription());

let user1 = new User('user1','luser1','dsfdsdsf@dsdfs.com','12345')
let user2 = new User('user1','luser1','dsfdsdsf@dsdfs.com','12345')
//let user3 = user1
let user3 = {...user1}
user1.lName = 'bla'
console.log(user3.lName);
if (user1 === user3) {
    console.log('equal');
} else {
    console.log('not equal');
}
