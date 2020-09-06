import React from 'react'
import ReactDOM from 'react-dom'

class Main extends React.Component{
    render(){
        return (<div>Hi i am a component
            <Title title={'i am Title'} content={'i am content'} />
            <Title title={'i am Title1'} content={'i am content'} />
            
        </div>)
    }
}
class Title extends React.Component{
    render(){
        return(<div>
    <h2>{this.props.title}</h2>
    <p>{this.props.content}</p>
    <User Fname={'Manish'} lname={'shahi'} />

    </div>
    ) 
}
}
class User extends React.Component{
    constructor(props){
        super(props)
        this.fullName = this.props.Fname + ' ' + this.props.lname
    }
    render(){
        return <h2>{this.fullName}</h2>

    }
}
ReactDOM.render(<Main />,document.querySelector('#container'))