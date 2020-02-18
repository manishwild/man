function showBox(num){
    for (let i = 0; i < num; i++) {
        for (let x = 0; x < num; x++) {
           if(i==0 || x == 0 || x == num - 1 || i == num - 1 ||i == x || i + x == num-1 ||i == num/2 || x == num/2 ) {
               document.write('*')
           } else{
               document.write('&nbsp; ')
           }
            
        }
        document.write('<br>')
    }
}
showBox(46)