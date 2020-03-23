window.onload =function () {
    //my data that should be shown in the table
    //tutorial link is https://www.cssscript.com/dynamic-data-table-vanilla-javascript/
    let myData = {
    "headings":['Product Name','Product Price','Quantity','Total'],
    "data": [
        ["keyboard","5","10","50 Euro"],
        ["mouse","5","10","50 Euro"],
        ["screen","50","10","500 Euro"]
    ]

}
let myTable = document.querySelector('#myTable')

let mydataTable = new DataTable(myTable,{data: myData,searchable: true})//you can add option inside curly bracket

document.querySelector('#addRowbtn').addEventListener('click',function (e) {
    //add new role
    //mydataTable.rows().add(['headset',price.value,quantity.value,total])
    

let product = document.querySelector('#productNameInput')

let price =document.querySelector('#productPriceInput')

let quantity =document.querySelector('#productquantityInput')

let total = parseFloat(price.value) * parseFloat(quantity.value) +' Euro'
mydataTable.rows().add([product.value,price.value,quantity.value,total])
product.value=''
price.value=''
quantity.value=''
})

}
