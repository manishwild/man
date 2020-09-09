import React from 'react'
import ReactDOM from 'react-dom'
import SeachBar from './components/searchBar'

const App = () => {
    return (
        <div className='contanier'>
        <SeachBar />
        </div>
    )
}
ReactDOM.render(<App/>, document.querySelector('#container'))