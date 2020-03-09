async function getData() {
    let response = await fetch('https://api.chucknorris.io/jokes/random')
    let data = await response.text()//or you can use .json
    console.log(data)
}
getData()