let str = "Hello World"
//console.log(str.search("l", )) search like indexOf

console.log(str.slice(6,11))

let findIndexSecond =  txt =>{
   // return txt.indexOf((" "),txt.search(" ")+1) +1 this is also right way
   return txt.indexOf(" ")+1
}
console.log(findIndexSecond("blaaa bla bla"))

let findIndexThird = txt => {
    // let firstSpaceIdx = txt.indexOf(" ")
    // let secondSpaceIdx = txt.indexOf(" ",firstSpaceIdx + 1)
    // return secondSpaceIdx + 1
    //return txt.indexOf(" ",txt.indexOf(" ")+1)+1
    return txt.indexOf(" ",findIndexSecond(txt))+1

}
console.log(findIndexThird("Hello My Name is Manish"))

function getSecondWord(txt){
        return txt.slice(findIndexSecond(txt),findIndexThird(txt)-1)
}

console.log(getSecondWord("This is'nt something Different"))