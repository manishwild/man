
// function print(num,txt) {
//     for (let i = 0; i < num; i++) {
//         document.write(txt+"<br>")
        
//     }
        
//     }
// print(3,"hello")

// let print = (num,txt) > {

// }

// fuction factor(num){
//     for (let index = 5; i < num; i--) {
//         for (let x = 0; x < ; x++) {
//            document.write(num)
            
//         }
//     }
// }

function factor(num) {
    if (num < 0){
        return "not valid"
    }
    let fact = 1
    for (let i = 1; i <= num; i++) {
        fact *= i
        
        
    }
    return fact
}
// document.write(factor(4))

function factors(num1,num2) {
    if(num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            document.write(i+'!= '+ factor(i) + '<br>')
           
        }
        }else{
            for (let i = num1; i >= num2; i--) {
                document.write(i+'!= '+ factor(i) + '<br>')
                
                
            }
        }
    }
factors(5,10)