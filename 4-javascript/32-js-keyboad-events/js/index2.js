window.onload = ()=>{
    
    let input=document.querySelector('#input1')
    creator(input)
    
  
}
function creator(someInput) {
        someInput.addEventListener('keypress',function (e) {
            if (e.which == 13) {
                let container =document.querySelector('#container')
                let newInput = document.createElement('input')
                newInput.type = 'text'
                creator(newInput)//important
                container.append(newInput)
                newInput.focus()
            }

        })
        
    }    
    