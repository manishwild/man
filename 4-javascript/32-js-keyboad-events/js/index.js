window.onload = () =>{
    let input = document.querySelector('#someInput')
    //keypress,keydown,keyup
    input.addEventListener('keypress',function (e) {
        //only capital letter are allowed in the input
        console.log(e)
        let checkValidate = false
        if (e.which>=65 && e.which<=90) {
            checkValidate = true
            
        }
        if (e.which == 196 || e.which ==220) {
            checkValidate = true
        }
        // if (e.which>=65 && e.which<=90||e.which == 196 || e.which ==220) {
        //     checkValidate = true
        // }
        if (!checkValidate) {
            e.preventDefault()
        }


    })



}