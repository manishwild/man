class Rectangle {
    constructor(height,width){
        this.height = height
        this.width = width
        this.name = 'Rectangle'
    }
    // this is a method nto print the object name property
    sayName(){
        console.log('hi, i am a '+ this.name)
    }
    //this is a method to return the object area
    // myArea() {
    //     return this.height * this.width
    // }
    get myArea(){
        return this.height * this.width
    }
    set myArea(value){
        this._realarea = value
    }
    }
    class Square extends Rectangle{
        constructor(length){ 
            super(length,length)
            this.name = 'square'
        
    }
}

let myHome = new Rectangle(11,13)
myHome.sayName()
console.log(myHome.myArea)

let sHome = new Rectangle(7,13)
sHome.sayName()
console.log(sHome.myArea)
document.write(JSON.stringify(sHome))//convert to json

myHome.height = 5
console.log(myHome.myArea)
console.log(myHome.myArea)
myHome.myArea = 100
console.log(myHome.myArea)
document.write(JSON.stringify(myHome) + '<br>')

let myOffice = new Square(3)
console.log(myOffice.myArea)
myOffice.sayName()