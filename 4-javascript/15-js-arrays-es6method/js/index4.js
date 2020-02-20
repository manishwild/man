function letterFinder (arr, char){
    let stor = 0
    arr.forEach(item => {
        
            if(item.indexOf(char.toLowerCase()) != -1 || item.indexOf(char.toUpperCase()) != -1)
                stor++
            
        }
    )
    return stor
}
let ourArray = ['Ahmadh','Tim','Safa', 'Alen','Manish','Abdhul','Felix','Felix','Ingo']
document.write(letterFinder(ourArray,"a") + '<br>')