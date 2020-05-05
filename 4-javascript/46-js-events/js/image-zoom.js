window.onload = ()=>{
    //
    const container = document.querySelector('#container')
    const img = document.querySelector('#container>img')
    let zoom = 1
    //let height = 400
    //add event listner wheel to container
    container.addEventListener('mousewheel',function (e) {
        console.log(e);
        if (e.deltaY > 0) {
            zoom += 0.01
        }else{
            if (zoom > 0) {
                zoom -= 0.01
            }
        
        
        }
         img.style.transform = `scale(${zoom})`          
        
    })
//my way i solved this way
    // container.onwheel = e =>{
    //     console.log(e.deltaY);
    //     if (e.deltaY > 0) {
    //         height++
    //     }else{
    //         if(height >0){
    //         height--
    //         }
            
    //     }
    //     console.log(height);
    //     img.style.height = height + 'px'
        
        
    // }
}