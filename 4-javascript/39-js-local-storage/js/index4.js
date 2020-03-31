window.onload =function (){

    let nameInput = document.querySelector('#page1')
    let birthInput = document.querySelector('#page2')
    let aboutText = document.querySelector('#page3')
    let meJson =localStorage.getItem('user')
    if (meJson != null) {
        let meObj = JSON.parse(meJson)
        nameInput.value =meObj.name
        birthInput.value =meObj.birthdate
        aboutText.value =meObj.aboutme
    }


    document.querySelector('#page4').addEventListener('click',function () {
        let me = {
            name: nameInput.value,
            birthdate: birthInput.value,
            aboutme: aboutText.value
        }
        localStorage.setItem('user',JSON.stringify(me))
   
        
   
})
}