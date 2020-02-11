let num1 = 151
console.log(num1.toString().replace(/1/g, "8" ))

let num2 =parseFloat("123.4")
//parInt convert to integer,eval convert to Number(public method)
//parsFloat convert to decimal number
console.log(typeof(num2))
console.log(num2)

let num3 = 2.29
// tofixed will round the number and convert it to string
console.log(num3.toFixed(1))