import React from 'react';
import ReactDOM from 'react-dom';
import{ Provider } from 'react-redux';
import {createStore} from 'redux';

import Router from './components/Router'
import reducers from './reducers';
import { authenicationPost } from './services/api';

class App extends React.Component{
    
    render(){
        return(
            
            <Router><div>Hi!</div></Router>
            
        )
    }
}

ReactDOM.render(<Provider store={createStore(reducers)}><App/></Provider>, document.querySelector('#container'))