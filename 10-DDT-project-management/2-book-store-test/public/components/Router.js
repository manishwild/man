import React from 'react'
import { connect } from 'react-redux'
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
import Authenication from './Authenication';
import { authenicationPost } from '../services/api';
import { setUserAction } from '../action'

class Router extends React.Component  {
    componentDidMount(){
        authenicationPost().then(data => {
            if (data != 10) {
                this.props.setUserAction(data)
            }
        })
    }
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
            <Route path="/admin" exact component ={() => <Authenication><Admin /></Authenication>} />
            <Route path="/admin/mybooks" exact component ={() => <Authenication><Mybooks /></Authenication>} />
            <Route path="/admin/mybook/:id" exact component ={() => <Authenication><Mybook /></Authenication>} />
            <Route path="/admin/addbook" exact component ={() => <Authenication><AddBook /></Authenication>} />
            <Route path="/book/:title/:id" exact component ={Book} />
            <Route path="/"  component ={Page404} /> 
            </Switch>
            <Footer />
        </div>
        </BrowserRouter>
    )
    }
    
}

export default connect(null,{setUserAction})(Router)