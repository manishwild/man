let i = 0
// while (i < 10) {
//     console.log(i)
//     i++
// }
let blainterval=setInterval(() => {
    console.log(i)
    i++
    if (i == 100)
    clearInterval(blainterval)
}, 1000);