function hopla(num) {
    if(num !== 0){
        return num

    }else{
        console.log(hopla(num -1))
        return num
    }
}
hopla(3)