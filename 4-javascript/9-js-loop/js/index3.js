for (let i = 0; i <= 10 ; i++){
    for (let x = 0; x <= 10; x++) {
        if(x == 0 || i == 0 || x == 10 || i == 10  ) {
    document.write('*')
    } else {
        document.write('&nbsp;  ')
    }
    }
    document.write('<br>')
}

for (let i = 0; i <= 14 ; i++){
    for (let x = 0; x <= 14; x++) {
        if(x == 0 || i == 0 || x == 14 || i == 14 || i == x || (i -1) == (13-x)|| x==7 || i==7 ) {
    document.write('*')
    } else {
        document.write('&nbsp;  ')
    }
    }
    document.write('<br>')
}

