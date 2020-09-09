const getData = (keyWord) => {
    console.log('this is wiki',keyWord);
    const url = 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=' + keyWord
    return new Promise((resolve, reject) => { 
        fetch(url).then(response => {
            if (response.status === 200) {
                response.json().then(data =>{
                    resolve(data)
                }).catch(error =>{
                    reject(error)
                })
            } else {
                reject(new Error('Cannot get the data. Response status is: '+ response.status))
            }
        }).catch(error =>{
            reject(error)
        })
    })
}
export default getData