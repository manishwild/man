class Participant {
    constructor(lastname ,firstname){
        this.firstName = firstname
        this.lastName =  lastname
    }
    fullName(){
    return this.firstName + ' ' + this.lastName
}
}
let Manish = new Participant('shahi','manish')
document.write(Manish.fullName()+ '<br>')
let Alen = new Participant('s','Alen')
document.write(Alen.fullName()+ '<br>')