import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from "react-router-dom";
import Example from "./components/Navbar";





const PageOne = () => {
     return(<div>
        Page one
        <br />
        {/* <a href='/pagetwo'>page two</a> */}
        <Link to="/pagetwo">Page two</Link>
        <br />
        <Link to="/pagetwo/page">Page Three</Link>
    </div>)
}

const PageTwo = () => {
    return(<div>
       Page Two
       <br />
        {/* <a href='/'>page one</a> */}
        <Link to="/">Page one</Link>
        <br />
        <Link to="/pagetwo/page">Page Three</Link>
   </div>)
}

const PageThree = () => {
    return(<div>
       Page three
       <br />
       <Link to="/">Page one</Link>
       <br />
       <Link to="/pagetwo">Page two</Link>
   </div>)
}



class App extends React.Component{
    render(){
        return(
                <BrowserRouter>
                    <div>
                    <Example></Example>
                        {/* <Route path='/'  component={Example} /> */}
                        <Route path='/' exact component={PageOne} />
                        <Route path='/pagetwo' exact component={PageTwo} />
                        <Route path='/pagetwo/page' component={PageThree} />
                    </div>
                </BrowserRouter>
        )
    }
}


ReactDOM.render(<App />, document.querySelector('#container'))
