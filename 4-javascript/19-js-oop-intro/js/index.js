let x = {}
document.write(typeof x + '<br>')

x.bla = 1212
x.blabla = 'manish'
x.mul = function (num) {
    return this.bla * num
}
//let y = object.assign(x)
let y = {...x}
 y.bla = 1414

//document.write(x.mul(2) + '<br>')
document.write(y.bla + '<br>')
document.write(y.mul(2) + '<br>')