let grade = 105
// if(grade >= 50)
// {
//     console.log("you pass")
// }
// else
// {
//     console.log("you fail")
// }first step
// if(grade >= 1 && grade <= 49)
// {
//        console.log("you fail")
       
// }
// if(grade >= 50 && grade < 60)
// {
//        console.log("its ok")
       
// }
// if(grade >= 60 && grade < 80)
// {
//        console.log("its good")
       
// }
// if(grade >= 80 && grade <= 100)
// {
//        console.log("its excellent")} same as down
       
if(grade < 50 && grade > 0){
    console.log("failed")
}else{
    if(grade < 60 && grade >= 50){
    console.log("good")}
    else{
        if(grade < 80 && grade >= 60){
    console.log("very good")
    }
    else{
        if(grade <= 100 && grade >= 80){
    console.log("excellent")
    }
    else{
        if(grade <= 101 && grade >= -1){
    console.log("out of range")
    }
}
}
    }
}