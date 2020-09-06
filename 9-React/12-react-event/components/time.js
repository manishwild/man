import React from 'react'

class Time extends React.Component{
    state = {time:null}
     componentDidMount(){
        this.timerID = setInterval(() => {
            this.setState({time: new Date().toLocaleTimeString()})
             
        }, 1000);

    }
    render(){
        return <div> now the time is : {this.state.time} </div>
    }
    
    
   
}


export default Time