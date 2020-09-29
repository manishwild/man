const {checkData, joiner} = require('./helper')

const initApp = () => {
   const addUserBtn = document.querySelector('#addBtn')
   addUserBtn.addEventListener('click',() => {
      addUser()
   })

}


const addUser = () => {
    const UserNameElement = document.querySelector('#userNameInp')
    const UserAgeElement = document.querySelector('#ageInp')
    const userListElement = document.querySelector('#userList')
    if (checkData(UserNameElement.value, UserAgeElement.value)) {
    const newElement = document.createElement('li')
    newElement.innerText = joiner(UserNameElement.value, UserAgeElement.value)
    userListElement.append(newElement)
    } else {
        alert('data error')
    }
    
 
 }
    
initApp()
