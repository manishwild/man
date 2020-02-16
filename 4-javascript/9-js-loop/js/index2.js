// for (let i = 0; i <=4; i++) {
//     for (let x = 0; x <= 4; x++) {
//         if ((x + i) >= 4) {
//             document.write('*')
//         } else  {
//             document.write("-")
//         }
        
        
//     }
//     document.write("<br>")
// }

for (let i = 4; i >=0; i--) {
    for (let x = 0; x <=4; x++) {
        if (i <= x) {
            document.write("*")
        } else {
            document.write("&nbsp; ")
        }
    }
    document.write("<br>")
}

for (let i = 0; i <=4; i++) {
    for (let x = 4; x <=0; x++) {
        if (i <= x) {
            document.write("*")
        } else {
            document.write("&nbsp; ")
        }
    }
    document.write("<br>")
}