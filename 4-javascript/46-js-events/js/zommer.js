window.onload = ()=>{
    const container = document.querySelector('#container')
    const par = document.querySelector('#container>p')
    //declair counter for font size
    let fontSize = 16
    //assign wheel event to container
    container.onwheel= e =>{
        console.log(e.deltaY);
        //check the direction of wheeling
        //down e.deltaY will be positive
        if (e.deltaY > 0) {
            fontSize++
        }else{
            if(fontSize >0){
            fontSize--
            }
            
        }
        console.log(fontSize);
        par.style.fontSize = fontSize + 'px'
        

       
       
       
    }

}