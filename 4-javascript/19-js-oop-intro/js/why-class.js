let manish = {
    firstName: 'manish',
    lastName: 'shahi',
    fullName: function() { 
        return this.firstName + ' ' + this.lastName
    },
    tattoos: true
}

let preety = {
    firstName: 'preety',
    lastName: 'shrestha',
    fullName: function() { 
        return this.firstName + ' ' + this.lastName
    }
},
hair: true

let preetish = {
    firstName: 'preetish',
    lastName: 'shahi',
    fullName: function() { 
        return this.firstName + ' ' + this.lastName
    }
},
young: true

document.write(manish.fullName()+ '<br>')
document.write(preety.fullName()+ '<br>')
document.write(preetish.fullName()+ '<br>')

let parArr = [manish,preety,preetish]