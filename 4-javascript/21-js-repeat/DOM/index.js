let htmlObj = document.getElementsByTagName('h1');//the first h1 tag
console.log(htmlObj)// => special type of object (you can use inside)
//indexing is array[number]
//for objects: obj[string]or obj.prop
Array.from(htmlObj).forEach(element => {
    console.log(element)
});


// for (let i = 0; i < htmlObj.length; i++) {
//     console.log(htmlObj[i])

    
// }
let obj = {
    t: 't',
    b: 'b',
    ob:{
        ddd:5,
        st:[5,20,60,'somestring',{
            pr: true
        }]
    }
}
console.log(obj[0])//not working
console.log(obj.ob.ddd)
console.log(obj.ob.st[3])//
console.log(obj.ob.st[4].pr)// => true

let firstH1 = document.getElementsByTagName('h1')[0]
console.log(firstH1)
firstH1.innerHTML
console.log(firstH1.innerHTML)
firstH1.innerHTML = 'a new value'// changingt the content
console.log(firstH1.innerHTML)//new value
let secondH1 = document.getElementsByTagName('h1')[1]
secondH1.innerHTML = 'ggg<input type=color>'//changing the content
console.log(secondH1.innerHTML)
document.getElementsByTagName('h1')[0].innerText = 'Manish'//only text not rendering
