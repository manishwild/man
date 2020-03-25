//first task
//write javascript code function that will recieve div 'container'id  as parameter
//and create inside this div an text input
//second task
//change your previous fuction to add the input inside a div and this div should be supposed to be in the container
function appInit(containerId) {
    //get element by id containerId the poarameter
    let div=document.querySelector('#container')
    
    div.classList.add('container')
    if (div) {
        let div1 = document.createElement('div')
        div1.classList.add('controlsContainer')
        let input =document.createElement('input')
        div1.append(input)
        let btn = document.createElement('button')
        btn.innerText="Search"
        div1.append(btn)
        let pageDiv = document.createElement('div')
            div1.append(pageDiv)

        
         btn.addEventListener('click',function () {
            //div2.innerHTML =''
            getData(input.value,div2,pageDiv,1)
            //create paging div buttons container
            
        //     for (let i = 0 ; i < 20; i++) {
        
        // let img = document.createElement('img')
        // img.src="./img/dummy.png"//img.setAttribute('src','./img/dummy.png')
        // div2.append(img)
        
     //}

       })
        
        
    div.append(div1)
    
    
    //second div
    let div2 = document.createElement('div')
    div2.classList.add('images-container')

    
    
    div.append(div2)
    }else{
        //container not exit
        console.log('element with id " '+containerId+' " could not be found')
    }
    
   
}

//call the function
window.onload=function () {
    appInit('container')
}
async function getData(keyword,imagesContainer,paggingContainer,pageNumber) {
    imagesContainer.innerHTML=''
    let url ='https://pixabay.com/api/?key=12000491-41fc68d8c365df909e022ceb6&q='+keyword+'&page='+pageNumber
    let data =await fetch(url)
    if (data.status == 200) {
        let pic = await data.json()
        console.log(pic)
        let num =pic.totalHits / 20
        let btnNum = Math.ceil(num)
        paggingContainer.innerHTML =""
        for (let i = 0; i < btnNum; i++) {
            let paggingBtn = document.createElement('button')
            paggingBtn.innerText = i+1
            paggingContainer.append(paggingBtn)
            paggingBtn.addEventListener('click',function () {
                getData(keyword,imagesContainer,paggingContainer,i+1)
            })
            
        }
        pic.hits.forEach(element => {
            let img = document.createElement('img')
            img.src = element.previewURL
            imagesContainer.append(img)
            
        });

}
}
