for (let i = 0 ; i<=10; i++ )  {
    console.log(i)
}


//console.log(i)

let storage = ""
for (let i = 0; i <=10; i++) {
    storage = storage + i 
    if(i != 10){
        storage = storage + ","
    }
}
console.log(storage)
console.log("//////////////////")
for (let i = 10; i< 100; i++) {
    
    if(i%2!=0){
        console.log(i)
        //document.write(i)
    }
    
}
console.log("//////////////////")
for(let i = 11; i <50; i+=2){
    console.log(i)
}
console.log("//////////////////reverse loop/////////////////")
for (let i = 10; i >= 0; i-=2) {
    console.log(i)
    
}
console.log("//////////////////////////////////////////////////////////////////////////")

let sum = 0
for (let i = 1; i <=50; i++) {
    sum += i
    
    
}
console.log(sum)
console.log("//////////////////////////////////////////////////////////////////////////")

document.write('hello world <br> and FbW5 ')
document.write( 12345678910)

for (let i = 0; i <= 10; i++) {
    for (let x = 0; x <= 10; x++) {
        document.write(x+"<br>")
        
    }
    document.write("again<br>")
}