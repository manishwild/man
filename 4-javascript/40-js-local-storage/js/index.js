window.onload =function recall() {
    let input = document.querySelector('#todoInput')
    let btn = document.querySelector('#todoBtn')
    let todoList = document.querySelector('#todoList')
    let todoArray = []
   
    btn.addEventListener('click',function (e) {   
        let todoValue = input.value
        if (todoValue.trim()!="") {
            let listItem = document.createElement('li')
            listItem.innerText = todoValue
            todoList.append(listItem)
             todoArray.push(todoValue)
             let todoArraayJson = JSON.stringify(todoArray)
             localStorage.setItem('todolist',todoArraayJson)
        } else {
            alert('to do value is empty,please enter to do value')
        }
       
       

        
    })
    let jsonObj =localStorage.getItem('todolist')
    if (jsonObj != null) {
        let convertedArr = JSON.parse(jsonObj)
        convertedArr.forEach(element => {
            todoArray.push(element)
            let listItem = document.createElement('li')
            listItem.innerText = element
            todoList.append(listItem)
        });
    }
}




























