class Participant {
    constructor(lastname ,firstname){
        this.firstName = firstname
        this.lastName =  lastname
    }
    fullName(){
    return this.firstName + ' ' + this.lastName
    }  
}


let manish = new Participant('shahi','manish')
manish.glass = true
document.write(manish.fullName()+ '<br>')
let Alen = new Participant('skdkdifh','Alen')
document.write(Alen.fullName()+ '<br>')
let Mani = new Participant('shahi','mani')
document.write(Mani.fullName()+ '<br>')
//first
let parArr = [manish,Alen,Mani]
parArr.forEach(blaItem => {
    document.write(blaItem.firstName + '<br>')
    })
//second
function firstnamePrinter1(arr) {
    arr.forEach(item =>{
        document.write(item.firstName + ' ' +item.glass + '<br>')
    })
}
firstnamePrinter1(parArr)
//third

function firstNamePrinter2(arr) {
    let storage = ''
    arr.forEach(item => {
        storage += item.firstName + '<br>'
    })
    return storage
    
}
document.write(firstNamePrinter2(parArr))

function charFinder(arr ,chr) {
    let result = []
    arr.forEach(item => {
        if(item.lastName.indexOf(chr) > -1) {
            result.push(item)
        }
    })
    return result
}
console.log(charFinder(parArr, 'k'))
//easy way
function easyway(arr,chr){
    return arr.filter(item => item.lastName.indexOf(chr)> -1)

}
console.log(easyway(parArr, 'a'))
document.write('/////////////////////////////////////////<br>')
easyway(parArr,'f').forEach(blaItem =>{
    document.write(blaItem.firstName + '<br>')
})

