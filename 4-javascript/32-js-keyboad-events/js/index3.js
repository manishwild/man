window.onload = () => {
    let productInput = document.querySelector(".product div:nth-child(1) input")
    let priceInput = document.querySelector(".product div:nth-child(2) input")
    let quatityInput = document.querySelector(".product div:nth-child(3) input")
    let resultSpan = document.querySelector(".product div:nth-child(4) span")
    productInput.addEventListener('keyup', function (e) {
        if (e.which == 13) {
            priceInput.focus()
        }

    })
    setEvent('keyup', priceInput, priceInput, quatityInput, resultSpan, 'price')

    // priceInput.addEventListener('keyup',function (e) {     let price =
    // parseFloat(priceInput.value)     let quantity=parseFloat(quatityInput.value)
    // resultSpan.innerText = price * quantity calculator(resultSpan,price,quantity)
    // })

    setEvent('change', priceInput, priceInput, quatityInput, resultSpan, 'price')

    // priceInput.addEventListener('change',function (e) {     let price =
    // parseFloat(priceInput.value)     let quantity =parseFloat(quatityInput.value)
    // calculator(resultSpan,price,quantity)
    // calculator(resultSpan1,price1,quantity1) })
    setEvent(
        'keyup',
        quatityInput,
        priceInput,
        quatityInput,
        resultSpan,
        'quantity'
    )
    // quatityInput.quatityInput('keyup',function (e) {     let price =
    // parseFloat(priceInput.value)     let quantity=parseFloat(quatityInput.value)
    // resultSpan.innerText = price * quantity calculator(resultSpan,price,quantity)
    // })

    setEvent(
        'change',
        quatityInput,
        priceInput,
        quatityInput,
        resultSpan,
        'quantity'
    )
    // quatityInput.addEventListener('change',function (e) {     let price =
    // parseFloat(priceInput.value)     let quantity =parseFloat(quatityInput.value)
    // calculator(resultSpan,price,quantity) })
    let newProduct = document.querySelector('#newProduct')
    newProduct.addEventListener('click', function (e) {
        e.preventDefault()
        let productInputsArr = document.querySelectorAll(
            '.product div:nth-child(1) input'
        )
        let check = true
        productInputsArr.forEach(element => {
            if (element.value.trim() == '') {
                check = false
                element.focus()
            }

        });
        if (check) {
            functionCaller()
        }
    })

    document
        .querySelector('#invoicegenerate')
        .addEventListener('click', function (e) {
            e.preventDefault()
            let productsArr = document.querySelectorAll('.products .product')
            let printTable = document.querySelector('#printTable tbody')
            // remove all old rows from the table for (let i = 1; i <
            // printTable.children.length; i++) {     printTable.children[i].remove() }
            // finish removing from the table
            printTable.innerHTML = ''
            for (let i = 1; i < productsArr.length; i++) {
                if (productsArr[i].children[0].children[0].value.trim() == '') {
                    productsArr[i]
                        .children[0]
                        .children[0]
                        .focus()
                    return
                }

            }
            for (let i = 1; i < productsArr.length; i++) {
                let newRow = document.createElement('tr')

                let productTd = document.createElement('td')
                productTd.innerText = productsArr[i]
                    .children[0]
                    .children[0]
                    .value
                    newRow
                    .append(productTd)

                let priceTd = document.createElement('td')
                priceTd.innerText = productsArr[i]
                    .children[1]
                    .children[0]
                    .value + 'Eur'
                newRow.append(priceTd)

                let quantityTD = document.createElement('td')
                quantityTD.innerText = productsArr[i]
                    .children[2]
                    .children[0]
                    .value
                    newRow
                    .append(quantityTD)

                let totalTd = document.createElement('td')
                totalTd.innerText = productsArr[i]
                    .children[3]
                    .children[0]
                    .innerText
                    newRow
                    .append(totalTd)

                printTable.append(newRow)

            }
            let sumTotal1 = document.querySelector('.sumTotal')
            document
                .querySelector('#printSection .sumTotal')
                .innerText = sumTotal1.innerText

        })

    // here you need to write your event handler     productDiv.innerHTML +='<div
    // class="product">'+     '<div>'+         '<input type="text">'+     '</div>'+
    // '<div>'+         '<input type="number" min="0" value="0">'+     '</div>'+
    // '<div>'+         '<input type="number" min="0" value="0">'     '</div>'+
    // '<div>'+         '<span>0</span>'+     '</div>'+ '</div>'

}

// function calculator(result,price,quantity){     result.innerText = price *
// quantity }
function setEvent(
    eventName,
    triggerElement,
    priceElement,
    quantityElement,
    resultElement,
    elementType
) {
    triggerElement.addEventListener(eventName, function (e) {
        let price = parseFloat(priceElement.value)
        let quantity = parseFloat(quantityElement.value)
        resultElement.innerText = (price * quantity) + 'EURO'
        // queryselect return only the first found element queryselectAll return all
        // element match thr selector
        let spanArr = document.querySelectorAll('.product>div>span')
        let storage = 0
        spanArr.forEach(element => {
            let innerValue = element
                .innerText
                .replace(' EURO', '')
            let price = parseFloat(innerValue)

            storage += price
        });
        let sumTotalElement = document.querySelector('.sumTotal')
        sumTotalElement.innerText = storage + 'Euro'

        if (elementType == 'price' && eventName == 'keyup') {
            if (e.which == 13) {
                quantityElement.focus()
            }
        }
        if (elementType == 'quantity' && eventName == 'keyup') {
            if (e.which == 13) {
                let productInput = priceElement
                    .parentElement
                    .parentElement
                    .children[0]
                    .children[0]
                let currentProduct = priceElement.parentElement.parentElement
                let products = priceElement.parentElement.parentElement.parentElement
                let childrenArr = Array.from(products.children) //convert collection to array
                // alert(priceElement.parentElement.parentElement.parentElement)
                // console.log(childrenArr.indexOf(currentProduct))
                // console.log(childrenArr.length)
                let productsLength = childrenArr.length
                let currentproductindex = childrenArr.indexOf(currentProduct)
                if (productInput.value.trim() != '') {
                    if (productsLength - 1 == currentproductindex) {
                        functionCaller()
                    } else {
                        childrenArr[currentproductindex + 1]
                            .children[0]
                            .children[0]
                            .focus()

                    }

                }
                //console.log(productInput)

            }
        }

    })
}
function functionCaller() {
    let productDiv = document.createElement('div')
    productDiv
        .classList
        .add('product')
    let firstdiv = document.createElement('div')
    let productInput = document.createElement('input')
    productInput.type = 'text'
    firstdiv.append(productInput)
    productDiv.append(firstdiv)

    let secondDiv = document.createElement('div')
    let newpriceInput = document.createElement('input')
    newpriceInput.type = 'number'
    newpriceInput.setAttribute('min', '0')
    newpriceInput.value = '0'
    secondDiv.append(newpriceInput)
    productDiv.append(secondDiv)

    let thirdDiv = document.createElement('div')
    let newquantityInput = document.createElement('input')
    newquantityInput.type = 'number'
    newquantityInput.setAttribute('min', '0')
    newquantityInput.value = '0'
    thirdDiv.append(newquantityInput)
    productDiv.append(thirdDiv)

    let fourthDiv = document.createElement('div')
    let newResultSpan = document.createElement('span')
    newResultSpan.innerText = '0 Euro'
    fourthDiv.append(newResultSpan)
    productDiv.append(fourthDiv)

    let productsDiv = document.querySelector('.products')
    productsDiv.append(productDiv)

    setEvent(
        'keyup',
        newpriceInput,
        newpriceInput,
        newquantityInput,
        newResultSpan,
        'price'
    )
    setEvent(
        'change',
        newpriceInput,
        newpriceInput,
        newquantityInput,
        newResultSpan,
        'price'
    )
    setEvent(
        'keyup',
        newquantityInput,
        newpriceInput,
        newquantityInput,
        newResultSpan,
        'quantity'
    )
    setEvent(
        'change',
        newquantityInput,
        newpriceInput,
        newquantityInput,
        newResultSpan,
        'quantity'
    )
    productInput.addEventListener('keyup', function (e) {
        if (e.which == 13) {
            newpriceInput.focus()
        }
    })
    productInput.focus()
}