async function getData(keyWord) {
    let url = 'https://api.openweathermap.org/data/2.5/weather?q='+keyWord+'&APPID=d05af9477b0f46101352d52dfb650f46'

    let response = await fetch(url)
    let data = await response.text()
    console.log(data)//after data i can display result any image inside it.using xhr
}
getData("hamburg")