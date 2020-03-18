window.onload = () =>{
    let priceInput = document.querySelector(".product div:nth-child(2) input")
    let quatityInput = document.querySelector(".product div:nth-child(3) input")
    let resultSpan = document.querySelector(".product div:nth-child(4) span")
    priceInput.addEventListener('keyup',function (e) {
        let price = parseFloat(priceInput.value)
        let quantity=parseFloat(quatityInput.value)
        //resultSpan.innerText = price * quantity
        calculator(resultSpan,price,quantity)
    })
    
    priceInput.addEventListener('change',function (e) {
        let price = parseFloat(priceInput.value)
        let quantity =parseFloat(quatityInput.value)
        calculator(resultSpan,price,quantity)
        calculator(resultSpan1,price1,quantity1)
    })
    
    quatityInput.addEventListener('keyup',function (e) {
        let price = parseFloat(priceInput.value)
        let quantity=parseFloat(quatityInput.value)
        //resultSpan.innerText = price * quantity
        calculator(resultSpan,price,quantity)
    })
    quatityInput.addEventListener('change',function (e) {
        let price = parseFloat(priceInput.value)
        let quantity =parseFloat(quatityInput.value)
        calculator(resultSpan,price,quantity)
    })
    let newProduct = document.querySelector('#newProduct')
    newProduct.addEventListener('click',function (e) {
        e.preventDefault()
        let productDiv = document.createElement('div')
        productDiv.classList.add('product')
        let firstdiv = document.createElement('div')
        let productInput = document.createElement('input')
        productInput.type='text'
        firstdiv.append(productInput)
        productDiv.append(firstdiv)

        let secondDiv = document.createElement('div')
        let newpriceInput = document.createElement('input')
        newpriceInput.type = 'number'
        newpriceInput.setAttribute('min','0')
        newpriceInput.value = '0'
        secondDiv.append(newpriceInput)
        productDiv.append(secondDiv)

        let thirdDiv = document.createElement('div')
        let newquantityInput = document.createElement('input')
        newquantityInput.type = 'number'
        newquantityInput.setAttribute('min','0')
        newquantityInput.value = '0'
        thirdDiv.append(newquantityInput)
        productDiv.append(thirdDiv)

        let fourthDiv = document.createElement('div')
        let newResultSpan = document.createElement('span')
        newResultSpan.innerText = '0'
        fourthDiv.append(newResultSpan)
        productDiv.append(fourthDiv)

        let productsDiv = document.querySelector('.products')
        productsDiv.append(productDiv)
//here you need to write your event handler
    //     productDiv.innerHTML +='<div class="product">'+
    //     '<div>'+
    //         '<input type="text">'+
    //     '</div>'+
    //     '<div>'+
    //         '<input type="number" min="0" value="0">'+
    //     '</div>'+
    //     '<div>'+
    //         '<input type="number" min="0" value="0">'
    //     '</div>'+
    //     '<div>'+
    //         '<span>0</span>'+
    //     '</div>'+
    // '</div>'


        newpriceInput.addEventListener('keyup',function (e) {
            let price = parseFloat(newpriceInput.value)
            let quantity=parseFloat(newquantityInput.value)
            //resultSpan.innerText = price * quantity
            calculator(resultSpan1,price1,quantity1)
        })
        
        newpriceInput.addEventListener('change',function (e) {
            let price = parseFloat(newpriceInput.value)
            let quantity =parseFloat(newquantityInput.value)
            calculator(resultSpan1,price1,quantity1)
        })
        
        newquatityInput.addEventListener('keyup',function (e) {
            let price = parseFloat(newpriceInput.value)
            let quantity=parseFloat(newquantityInput.value)
            //resultSpan.innerText = price * quantity
            calculator(resultSpan1,price1,quantity1)
        })
        newquatityInput.addEventListener('change',function (e) {
            let price = parseFloat(newpriceInput.value)
            let quantity =parseFloat(newquantityInput.value)
            calculator(resultSpan1,price1,quantity1)
        })

        






    })




}



function calculator(result,price,quantity){
    result.innerText = price * quantity
}
