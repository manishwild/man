import React from 'react'
import {BrowserRouter,Route,Switch  } from "react-router-dom";
import Home from './Home';
import Shop from './Shop';
import NavigationBar from './NavigationBar';
import Page404 from './Page404';
import Footer from './Footer';
import Register from './Register';
import Login from './Login';
import Admin from './Admin';
import AddBook from './AddBook';
import Book from './Book';
import Mybooks from './MyBooks';
import Mybook from './Mybook';

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
            <Route path="/admin" exact component ={Admin} />
            <Route path="/admin/mybooks" exact component ={Mybooks} />
            <Route path="/admin/mybook/:id" exact component ={Mybook} />
            <Route path="/admin/addbook" exact component ={AddBook} />
            <Route path="/book/:title/:id" exact component ={Book} />
            <Route path="/"  component ={Page404} /> 
            </Switch>
            <Footer />
        </div>
        </BrowserRouter>
    )
    }
    
}

export default Router