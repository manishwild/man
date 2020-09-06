const getPostion = ()=> {
    return new Promise((resolve, reject) => {
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{
                //console.log(position);
                //this.state.lat = position.coords.latitude wrong way
               // this.setState({lat :position.coords.latitude})
                resolve(position)
            },
            (error)=>{
                //console.log(error);
                //this.setState({error: error.message})
                reject(error)
            }
        )
    })
}

export default getPostion