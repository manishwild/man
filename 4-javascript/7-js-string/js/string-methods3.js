let str = "Hello World"
console.log(str.slice(-11,-6))

console.log(str.substring(0,5))//Substring same as Slice but it will not take negeetive value 

console.log(str.substr(6,3))
//replace only first found result
console.log(str.replace("r","x"))
let str2 = "i love life,i love programming,i love you"
console.log(str2.replace(/i /ig,"you "))

console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.concat(" ","hello Fbw5 ",str2))

let str3 = " manishwild1000@yahoo.com "
console.log(str3.trim())//It will remove the whitespaces from both side

console.log(str3.charAt(2))
console.log(str3.charCodeAt(3))