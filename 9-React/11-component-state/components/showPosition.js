import React from 'react'
import getPostion from '../services/geoLocation'

class Postion extends React.Component{
    state = {lat:null,errorMessage: null}
    componentDidMount(){
        
        console.log(new Date().toLocaleTimeString());

        getPostion().then(position =>{
            this.setState({lat :position.coords.latitude})
        }).catch(error => {
            this.setState({errorMessage: error.message})
        })
        
//console.log('this component is mounted');
}
    render(){
        if (this.state.lat === null && this.state.errorMessage === null) {
            return(
                <div>
                    <div>Loading.......</div>
                </div>
            )
           
        }
        if (this.state.lat !== null  && this.state.errorMessage === null) {
            return (
                <div>
                    <div>Your Latitude is: {this.state.lat} </div>
                </div>
            )
                
        }
        if (this.state.lat === null  && this.state.errorMessage !== null) {
            return (
                <div>
                    <div>error: {this.state.errorMessage}</div>
                </div>
            )
        }
    }
}

export default Postion