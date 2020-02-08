let x = "Hello World"
let len = x.length
console.log(len)

let idx = x.indexOf("l",4)// it will define the postion of alphabhat begin is 012...when will u add no it will start from 3 position
console.log(idx)

let lidx = x.lastIndexOf("l")//it will search last alphabhat where l is
console.log(lidx)
console.log("/////////////")


 indexesFinder("Hakunana Matata", "k", 0)

function indexesFinder(txt,chr,start) {
   if(start < txt.length){
      let idx = txt.indexOf(chr,start)
      if(idx != -1){console.log(idx)
      indexesFinder(txt,chr,idx+1)
      }
    }
}