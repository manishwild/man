import React from 'react'
import ReactDOM from 'react-dom'
import Time from './components/time'
//import getPostion from './services/geoLocation'
import Postion from './components/showPosition'
//functional component
// const App =() => {
//     let lat = ''
//     window.navigator.geolocation.getCurrentPosition(
//         (position)=>{
//             console.log(position);
//             lat = position.coords.latitude
//         },
//         (error)=>{
//             console.log(error);
//         }
//     )
//     return <div>lat:{lat}</div>
// }

//class component
class App extends React.Component{

    // constructor(props){
    //     super(props)
    //     //this.state = {lat:null,error:null}
        

       
    // }
    // componentDidMount(){
        
    //             console.log(new Date().toLocaleTimeString());

    //             getPostion().then(position =>{
    //                 this.setState({lat :position.coords.latitude})
    //             }).catch(error => {
    //                 this.setState({error: error.message})
    //             })
                
    //     console.log('this component is mounted');
    // }
    componentDidUpdate(){
        console.log('this component is updated');
    }
    componentWillUnmount(){
        console.log('this component is unmounted');
    }
    render(){
    return (
    <div>
        <div><Postion /> </div>
        
        <div> <Time /> </div>
    </div>
    )
    
}
}

ReactDOM.render(<App />,document.querySelector('#container'))