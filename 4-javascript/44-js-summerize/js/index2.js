window.onload= () => {
    let name = document.querySelector('#userName')
    let email = document.querySelector('#email')
    let btn1 = document.querySelector('#btn1')
    //let result = []
    btn1.addEventListener('click',function (e) {
        const personObj = {
            username:name.value,
            email:email.value
        }
        //let nameValue = name.value
        //let emailValue = email.value
        //let list = document.createElement('ul')
        //let listItem = document.createElement('li')
        //list.append(listItem)
        //result.push(nameValue,emailValue)
        //let resultArray = JSON.stringify(result)
        //localStorage.setItem('store',resultArr
        localStorage.setItem('store',JSON.stringify(personObj))
    })
    
    const jsonObj = localStorage.getItem('store')
    if (jsonObj != null) {
        let obj = JSON.parse(jsonObj)
        name.value = obj.username
        email.value = obj.email
    }
    
}