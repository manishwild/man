const getData = (searchWord, perPage, pageNum) => {
    const url = 'https://pixabay.com/api?' + 'key=' + '12000491-41fc68d8c365df909e022ceb6' +'&q=' + searchWord + '&per_page=' + perPage +'&page=' + pageNum

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