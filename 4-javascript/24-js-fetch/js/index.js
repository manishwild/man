// let getPromise = fetch('/data.json')
// getPromise.then(response => {
//     //console.log(response.json())
//     if (response.status == 200) {
//         let jsonPromise = response.json()
//         jsonPromise.then(data=> {
//             console.log(data)
//         }).catch(error => {
//             console.log(error)
//         })
//     } else {
//         console.log(error)
//     }
    
    
// }).catch(error => {
//     console.log(error)
// })

//get data using promise call
// let getData = fetch('/data.json')
// getData.then(response =>{
//     if (response.status == 200) {
//         let dataPromise = response.json()
//         dataPromise.then(data =>{
//             console.log(data)
//         }).catch(error => {
//             console.log(error)
//         })
        
//     } else {
//         console.log('there were error in getting Data')
//     }

    
// }).catch(error =>{
//     console.log(error)
// })
// //console.log(getData)
// //console.log('hi')

async function getData() {
    let response = await fetch('/data.json')
    let data = await response.json()
    console.log(data)
}
getData()
