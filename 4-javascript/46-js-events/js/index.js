window.onload = ()=>{
    //get html btn
    const btn = document.querySelector('#btn1')
    
    //add on click event to btn
    btn.addEventListener('click',(e)=>{
        console.log(e);
         })
         //get container element
        const container = document.querySelector('#container')
        container.onclick= e =>{
            console.log(e.clientX,e.clientY);
            
        }
        // add scroll event container
        container.addEventListener('scroll',e =>{
            //e.target refer to the element that tiger the event the triger which is container in this event

            console.log(container.scrollTop);
            if (e.target.scrollTop > 400) {
                e.target.style.color= 'red'
                
            }else{
                e.target.style.color= 'black'
            }
            //task1
            if (e.target.scrollTop > 16) {
                e.target.style.fontSize = e.target.scrollTop +'px'
            }
            
        })
   

}