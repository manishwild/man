//task1 draw the dices image inside the canvas


window.onload = ()=>{
    //get html events
    const canvas = document.querySelector('#canv')
    //create context instance fron canvas
    const ctx  = canvas.getContext('2d')
    //create html image
    let img = document.createElement('img')
    
    //img src
    //getting btn html elements
    let btn = document.querySelector('#grayScale')
    let btn1 = document.querySelector('#orginal')
    let btn2= document.querySelector('#invert')
    let btn3= document.querySelector('#removeRed')
    let btn4= document.querySelector('#greentogray')
    let btn5= document.querySelector('#effect1')
    let btn6= document.querySelector('#effect2')
    let brightness = document.querySelector('#brightnessslider')

    img.setAttribute('src','./imgs/dices.png')
    
    img.onload=(e) => {
        console.log(e);
        ctx.drawImage(img,0,0,500,500)
    }
    btn.onclick=()=>{
        
    //create onload events for img
    
        //getting image data pixel
        const imgData = ctx.getImageData(0, 0, 500, 500);
        console.log(imgData.data[0]);
        
		let pixels = imgData.data;
		for (let i = 0; i < pixels.length; i += 4) {
		  
		let lightness = (pixels[i] + pixels[i + 1] + pixels[i + 2])/3;
    
		  pixels[i] = lightness; //red
		  pixels[i + 1] = lightness; //green
		  pixels[i + 2] = lightness; //blue
        }
        ctx.clearRect(0,0,500,500)
        //redraw the changed data
		ctx.putImageData(imgData, 0, 0);
        
    }
    btn1.onclick=()=>{
        ctx.clearRect(0,0,500,500)
        ctx.drawImage(img,0,0,500,500)
    }
    btn2.onclick = ()=>{
        const imgData = ctx.getImageData(0, 0, 500, 500)
        for (let i = 0; i < imgData.data.length; i+=4) {
            imgData.data[i]= 255 - imgData.data[i]
            imgData.data[i+1]= 255 - imgData.data[i+1]
            imgData.data[i+2]= 255 - imgData.data[i+2]
            
        }
        ctx.clearRect(0,0,500,500)
        ctx.putImageData(imgData,0,0)
    }
    //add click event to remove red button
    btn3.onclick = ()=>{
        const imgData = ctx.getImageData(0, 0, 500, 500)
        for (let i = 0; i < imgData.data.length; i+=4) {
            if (imgData.data[i]>imgData.data[i+1]&&imgData.data[i]>imgData.data[i+2]) {
                imgData.data[i+3]=0
            }
            
        }
        ctx.clearRect(0,0,500,500)
        ctx.putImageData(imgData,0,0)
        
    }
    //add event click to btn4
    btn4.onclick = ()=>{
        //get drawing img data
    const imgData = ctx.getImageData(0, 0, 500, 500)
    //loop through data
    for (let i = 0; i < imgData.data.length; i+=4) {
        //check pixel is green
        if (imgData.data[i+1]-5>imgData.data[i]&&imgData.data[i+1]>imgData.data[i+2]) {
            let avg = (imgData.data[i]+imgData.data[i+1]+imgData.data[i+2])/3
            imgData.data[i]=avg
            imgData.data[i+1]=avg
            imgData.data[i+2]=avg
        }
        
    }
    ctx.clearRect(0,0,500,500)
    ctx.putImageData(imgData,0,0)
   }
   //add click event for btn5
   btn5.onclick = ()=>{
       let img1 = document.createElement('img')
       img1.setAttribute('src','./imgs/Red-Smoke.png')
       //add event load to the current image
       img1.onload=(e) =>{
        ctx.drawImage(img1,0,0,500,500)
       }
       
   }
   btn6.onclick = ()=>{
    let img2 = document.createElement('img')
    img2.setAttribute('src','./imgs/11.png')
    //add event load to the current image
    img2.onload=(e) =>{
        ctx.clearRect(0,0,500,500)
        ctx.drawImage(img,0,0,500,500)
        ctx.drawImage(img2,0,0,500,500)
    }
    
}
//add change event to saturation
brightness.addEventListener('change',function (e) {
    console.log(e);
    
    const imgData = ctx.getImageData(0, 0, 500, 500)
    const brightnessValue=brightness.value
    //loop through

    for (let i = 0; i < imgData.data.length; i+=4) {
        if (imgData.data[i] + parseInt(brightnessValue)>255) {
            imgData.data[i] =255
        }else{
            imgData.data[i] = imgData.data[i] + parseInt(brightnessValue)
        }
        if (imgData.data[i+1] + parseInt(brightnessValue)>255) {
            imgData.data[i+1] =255
        } else {
            imgData.data[i+1] = imgData.data[i+1] + parseInt(brightnessValue)
        }
        if (imgData.data[i+2] + parseInt(brightnessValue)>255) {
            imgData.data[i+2] =255
        } else {
            imgData.data[i+2] = imgData.data[i+1] + parseInt(brightnessValue)
        }
       
        
    }
    ctx.clearRect(0,0,500,500)
    ctx.putImageData(imgData,0,0)
    brightness.value = 0
})
    
    
}