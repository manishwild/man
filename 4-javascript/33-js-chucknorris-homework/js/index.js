window.onload = function () {
//getJoke()
getJokeSync()
let jokeBtn =document.querySelector('#jokeBtn')
jokeBtn.addEventListener('click',function () {
    //getJoke()
    getJokeSync()
})

}
//this function gonna be called in the first page load and in click event for the button
//it use async await
async function  getJokeSync() {
    let jokeImg = document.querySelector('#jokeImg')
    let jokeId = document.querySelector('#jokeId')
    let jokePar = document.querySelector('#jokePar')
    let url = 'https://api.chucknorris.io/jokes/random'
    let data =await fetch(url)
    if (data.status == 200) {
        let jokeObj = await data.json()
        console.log(jokeObj)

        jokeImg.src =jokeObj.icon_url
        jokeId.innerText = jokeObj.id
        jokePar.innerText = jokeObj.value

    }else{
        jokePar.innerText = 'error with getting data'
    }
}
//this function gonna be called in the first page load and in click event for the button
//it use promise
function getJoke() {
    //getting the elements from html to be filled with data
    let jokeImg = document.querySelector('#jokeImg')
    let jokeId = document.querySelector('#jokeId')
    let jokePar = document.querySelector('#jokePar')
    //getting the joke fro Api using fetch and promise
    let url = 'https://api.chucknorris.io/jokes/random'
    fetch(url).then(data => {
        if (data.status == 200) {
            data.json().then(jokeObj =>{
                console.log()
                jokeImg.src =jokeObj.icon_url
                jokeId.innerText = jokeObj.id
                jokePar.innerText = jokeObj.value
                
            }).catch(error=>{
                console.log(error)
            })
            
        }
        //data.json()
        //console.log(data.json())

    }).catch(error=>{
        console.log(error)
    })
}