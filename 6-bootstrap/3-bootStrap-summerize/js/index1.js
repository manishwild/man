window.onload = ()=>{
    let container = document.querySelector('.container')
    let div1 = document.querySelector('.container>div:nth-child(1)')
    let div2 = document.querySelector('.container>div:nth-child(2)')
    
    let div1Touched = false   
    div1.addEventListener('touchstart',(e)=>{
        div1Touched = true
        checkTouched()
        //console.log(e);
        //alert('done')
        

    })
    div1.addEventListener('touchend',(e)=>{
        
       // console.log(e);
        //alert('done')
        div1Touched = false

    })
    let div2Touched = false 
    div2.addEventListener('touchstart',(e)=>{
        div2Touched = true
        checkTouched()
        //console.log(e);
        //alert('done')
        

    })
    div2.addEventListener('touchend',(e)=>{
        //console.log(e);
        //alert('done')
        div2Touched = false

    })
    function checkTouched() {
        if (div1Touched && div2Touched) {
            alert('Both Are Touched')
            div2Touched = false
            div1Touched = false
        }
    }
        
        
  


}
let arr = [
    [2,3,9,8,4,5,2],
    [5,9,2,3,5,2,2],
    [5,6,8,6,7,8,8],
    [2,3,9,8,4,5,2],
    [2,3,9,8,4,5,2],
]



// window.onload = () => {
//     let div1 = document.querySelector('.container>div:nth-child(1)')
//     let div2 = document.querySelector('.container>div:nth-child(2)')
//     let div1_IsTouched = {
//         value:false
//     }
//     let div2_IsTouched = {
//         value:false
//     }
//     div1.ontouchstart = () => {
//         div1_IsTouched.value = true
//     }
//     div1.ontouchend = () => {
//         div1_IsTouched.value = false
//     }
//     div2.ontouchstart = () => {
//         div2_IsTouched.value = true
//         if (div1_IsTouched.value && div2_IsTouched.value) {
//             alert('the are touched')
//             div1_IsTouched.value = false
//             div2_IsTouched.value = false
//         }
//     }
//     div2.ontouchend = () => {
//         div2_IsTouched.value = false
//     }
// }