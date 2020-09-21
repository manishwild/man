import React from 'react'
import {BrowserRouter,Route,Switch  } from "react-router-dom";
import Home from './Home';
import Shop from './Shop';
import NavigationBar from './NavigationBar';
import Page404 from './Page404';
import Footer from './Footer';
import Register from './Register';
import Login from './Login';

class Router extends React.Component  {
    render(){
        return(
            
            <BrowserRouter>
            <div>
            <NavigationBar />
            <Switch>
            <Route path="/" exact component ={Home} />
            <Route path="/contact" exact component ={null} />
            <Route path="/about" exact component ={null} />
            <Route path="/shop" exact component ={Shop} />
            <Route path="/login" exact component ={Login} />
            <Route path="/register" exact component ={Register} />
            <Route path="/"  component ={Page404} /> 
            </Switch>
            <Footer />
        </div>
        </BrowserRouter>
    )
    }
    
}

export default Router