let i = 0
let blainterval=setInterval(() => {
    console.log(i)
    i++
    if (i == 21384000)
    clearInterval(blainterval)
}, 1000);