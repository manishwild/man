function find(Arr) {
    let theSmall =Arr[0]
    let theGreat = Arr[0]
    for (let i = 1; i < Arr.length; i++) {
        
        if (Arr[i] < theSmall) {
            theSmall = Arr[i]
            
            
            
        }
        if (Arr[i] > theGreat ) {
            theGreat  = Arr[i]
        }
        document.write(theSmall+','+theGreat+'<br>')
        
    }

}
find([2,6,8,9,10])