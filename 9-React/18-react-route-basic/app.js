import React from 'react';
import ReactDom from 'react-dom';
import { Button } from 'reactstrap';


class App extends React.Component{
    render(){
        if (window.location.pathname === '/dist/index.html') {
            currentPage = <Home />
        }
        return(
            <div>Hi</div>
        )
    }
}
class Home extends React.Component{
    render(){
        return(
            <div>Home</div>
        )
    }
}
class Contact extends React.Component{
    render(){
        return(
            <div>Contact</div>
        )
    }
}
class About extends React.Component{
    render(){
        return(
            <div>About</div>
        )
    }
}
ReactDom.render(<App />,document.querySelector('#container'))