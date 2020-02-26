
let person = {
    firstName: 'Manish',
    lastName: 'Shahi',
    birthyear: 1986,
    job:'trainer',
    married: true,
    name : function () {
        
        return this.firstName + ' ' + this.lastName
    },
    age :function () {
        let currentDate = new Date()
        let currentyear = currentDate.getFullYear()
        return currentyear - this.birthyear  
    },
    kids:['Preetish','preethak'],
    wife:{
        firstName:'preety',
        lastName:  'shrestha',
        birthyear:NaN,
        job:'buchhaltung',
        married:true,
        name : function () {
        
            return this.firstName + ' ' + this.lastName
        }
        
    },
    brother : [{
        firstName: 'mahesh',
        lastName: 'shahi'
    },{
        firstName:'mani',
        lastName: 'shahi'
    }]
}
document.write(person.name() + '<br>')
document.write(person.kids[0] + '<br>')
document.write(person.wife.name() + '<br>')
document.write(person.age()+'<br>')
document.write(person.brother[1].firstName  +'<br>')