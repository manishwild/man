//first task
//write javascript code function that will recieve div 'container'id  as parameter
//and create inside this div an text input
//second task
//change your previous fuction to add the input inside a div and this div should be supposed to be in the container
function appInit(containerId,apiKey) {
    //get element by id containerId the poarameter
    let div=document.querySelector('#'+containerId)
    
    div.classList.add('container')
    if (div) {
        let div1 = document.createElement('div')
        div1.classList.add('controlsContainer')
        let input =document.createElement('input')
        div1.append(input)
        let colorList = document.createElement('select')
        let colorOpt1 =document.createElement('option')
        colorOpt1.value = ''
        colorOpt1.innerText ='Choose color'
        colorList.append(colorOpt1)
        let colorArr =["grayscale", "transparent", "red", "orange", "yellow", "green", "turquoise", "blue", "lilac", "pink", "white", "gray", "black", "brown"]
        colorArr.forEach(element => {
            let colorOpt =document.createElement('option')
            colorOpt.value =element
            colorOpt.innerText = element
            colorList.append(colorOpt)
        }); 
        div1.append(colorList)
        let btn = document.createElement('button')
        let orientationList =document.createElement('select')
        let orientation1 =document.createElement('option')
        orientation1.value =''
        orientation1.innerText='choose screen'
        orientationList.append(orientation1)
        div1.append(orientationList)
       
        let orientArr = ["all", "horizontal", "vertical"]
        orientArr.forEach(element => {
            let orientation =document.createElement('option')
            orientation.value =element
            orientation.innerText = element
            orientationList.append(orientation)
        });
        let categoryList =document.createElement('select')
        let category1 =document.createElement('option')
        category1.value =''
        category1.innerText='category'
        categoryList.append(category1)
        div1.append(categoryList)
       
        let categoryArr = ["backgrounds", "fashion", "nature", "science", "education", "feelings", "health", "people", "religion", "places", "animals", "industry", "computer", "food", "sports", "transportation", "travel", "buildings", "business", "music"]
        categoryArr.forEach(element => {
            let category =document.createElement('option')
            category.value =element
            category.innerText = element
            categoryList.append(category)
        });
        let width =document.createElement('input')
        width.type = 'number'
        width.min ='0'
        width.placeholder='min width'
        div1.append(width)
        let height =document.createElement('input')
        height.type = 'number'
        height.min ='0'
        height.placeholder='min hight'
        div1.append(height)


        btn.innerText="Search"
        div1.append(btn)
        let pageDiv = document.createElement('div')
            div1.append(pageDiv)

        
         btn.addEventListener('click',function () {
            //div2.innerHTML =''
            getData(input.value,div2,pageDiv,1,colorList,orientationList,categoryList,width,height,apiKey)
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
// window.onload=function () {
//     appInit('container')
// }
async function getData(keyword,imagesContainer,paggingContainer,pageNumber,colorListElement,orientationListElement,categoryListElement,widthElement,heightElement,key) {
    //console.log(colorListElement.options[colorListElement.selectedIndex].value)
    //console.log(colorListElement.selectedIndex)
    let selectedColor = colorListElement.options[colorListElement.selectedIndex].value
    let colorParameter = ''
    if (selectedColor) {
        colorParameter = "&colors="+selectedColor
    }
    let orient=orientationListElement.options[orientationListElement.selectedIndex].value
    let orientParameter = ''
    if (orient) {
        orientParameter ="&orientation="+orient
    }
    let catego =categoryListElement.options[categoryListElement.selectedIndex].value
    let categoryParameter = ''
    if (catego) {
        categoryParameter ="&category="+catego
    }
    
    let widthParameter = ''
    if (widthElement.value.trim()) {
        widthParameter ="&min_width="+widthElement.value.trim()
    }

    let heightParameter = ''
    if (heightElement.value.trim()) {
        heightParameter ="&min_height="+heightElement.value.trim()
    }


        
    
    imagesContainer.innerHTML=''
    let url ='https://pixabay.com/api/?key='+key+'&q='+keyword+'&page='+pageNumber+colorParameter+orientParameter+categoryParameter+widthParameter+heightParameter
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
            //disable button
            if (pageNumber == i +1) {
                paggingBtn.disabled = true
            }
            paggingBtn.addEventListener('click',function () {
                getData(keyword,imagesContainer,paggingContainer,i+1,colorListElement,orientationListElement,categoryListElement,widthParameter,heightParameter,key)
            })
            
        }
        pic.hits.forEach(element => {
            let img = document.createElement('img')
           
            img.src = element.previewURL
            let link = document.createElement('a')
           link.setAttribute('target','_blank"')
           link.setAttribute('href',element.largeImageURL)
           link.append(img)

            imagesContainer.append(link)
            
        });

}
}

let Fbw5Search = {
    key:'',
    go: function (elementId) {
        
        if(this.key){
           appInit(elementId,this.key)
        }else{
        console.log('you did not enter api key');
        
    }
    }
}
//12000491-41fc68d8c365df909e022ceb6