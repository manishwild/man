let arr = [2,9,-2,]
try {
    document.write(arr(0)+'<br>')
} catch (error) {
    document.write(error+'<br>')
}finally{
    document.write('I am gonna be shown anyway'+'<br>')
}


document.write('hi<br>')

function div(a,b) {
    if (typeof a == 'string' || typeof b == 'string') {
        let blaErr1 = new Error('inputs can not be strings')
        throw (blaErr1)
    }
    if (b == 0) {
        let blaErr = new Error('you can not divide by hero !! smarty')
        throw (blaErr)
    } else {
        return a / b
    }
    
    
}
try{
    document.write(div(1,9)+'<br>')
}catch(blablaerror){
    document.write(blablaerror+'<br>')
}
document.write('hi2<br>')