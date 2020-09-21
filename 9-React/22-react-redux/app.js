import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import AddSong from './components/AddSong';

import SongDetail  from './components/SongDetail'
import SongsList from './components/SongList'
import reducers from './reducers'
//import reducers from './reducers/index' //you can do that way


class App extends React.Component{
    render() {
        return(
            <div className="container">
            <div className="row">
               <SongsList />
               <SongDetail />
               <AddSong />
            </div>
            </div>
        )
    }
}
// any component inside provider gonna have access to the main store
//provide need a store which gonna be built using redux createStore
// createStore needs reducer to organise the data inside the store
ReactDom.render(
<Provider store={createStore(reducers)}>
    <App/>
</Provider>
,document.querySelector('#container'))