window.onload = function recall() {
    let input = document.querySelector('#todoInput')
    let btn = document.querySelector('#todoBtn')
    let todoList = document.querySelector('#todoList')
    let todoArray = []

    btn.addEventListener('click', function (e) {
        let todoValue = input.value
        if (todoValue.trim() != "") {
            let listItem = document.createElement('li')
            listItem.innerText = todoValue
            todoList.append(listItem)
            todoArray.push(todoValue)
            let todoArraayJson = JSON.stringify(todoArray)
            localStorage.setItem('todolist', todoArraayJson)
        } else {
            alert('to do value is empty,please enter to do value')
        }

    })
    let jsonObj = localStorage.getItem('todolist')
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

//localStorage.clear()localStorage.removeItem('myCat')
// task:
// add delete-buttons to each element of the to-do-list. 
// The list element and the element inside the array should be deleted, 
// if the 'Done'-button is pressed.

// window.onload = function() {

//     // selectors
//     let toDoInput = document.querySelector('#toDoInput');
//     let addBtn = document.querySelector('#addBtn');
//     let toDoList = document.querySelector('#toDoList');
//     // array
//     let toDoArray = [];

//     // event for addButton
//     addBtn.addEventListener('click',function(){
//         let toDoInputElement = toDoInput.value.trim();
//         if (toDoInputElement != '') {
//             createToDoList(toDoInputElement);
//         } else {
//             alert('your to-do-input is empty');
//         }
//         // clears input after adding
//         toDoInput.value = '';
//     })

//     // renders to-do-list from localStorage after loading the page
//     let listJSON = localStorage.getItem('toDoList');
//     if (listJSON != null) {
//         let listOBJ = JSON.parse(listJSON);
//         listOBJ.forEach(element => {
//             createToDoList(element);
//         });
//     }

//     function createToDoList(toDoListElement) {
//         // creates listElement
//         let listElement = document.createElement('li');
//         listElement.innerText = toDoListElement;
        
//         // creates doneButtons
//         let buttonElement = document.createElement('button');
//         buttonElement.innerText = 'Done';
//         buttonElement.classList.add('doneButton');

//         // appends
//         listElement.append(buttonElement);
//         toDoList.append(listElement);

//         // pushs input to array
//         toDoArray.push(toDoListElement);

//         // saves array to localStorage
//         localStorage.setItem('toDoList',JSON.stringify(toDoArray));

//         // event for doneButton
//         buttonElement.addEventListener('click',function(e){

//             // removes the listElement where the button is inside
//             e.target.parentElement.remove();

//             // returns the innerText which is inside the listElement
//             selectedText = e.target.parentElement.innerText;
//             console.log(selectedText);

//             // deletes 'Done'-text from the innerText
//             selectedTextCutted = selectedText.substr(0,selectedText.length-4);
//             console.log(selectedTextCutted);

//             // searchs the text inside the array and returns the index of it
//             indexOfSelectedText = toDoArray.indexOf(selectedTextCutted);
//             console.log(indexOfSelectedText);

//             // deletes the founded text from the array
//             toDoArray.splice(indexOfSelectedText,1);
//             console.log(toDoArray);
            
//             // saves new array to localStorage
//             localStorage.setItem('toDoList',JSON.stringify(toDoArray));
//         })
//     }



// }