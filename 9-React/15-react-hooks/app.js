import React from 'react'
import ReactDom from 'react-dom'
import Accordion from './components/Accordion'

const items = [
    {
        title: 'What is React?',
        content: 'React is a frontend javascript framework'
    },
    {
        title: 'What is React?',
        content: 'React is a frontend javascript framework'
    }, {
        title: 'What is React?',
        content: 'You can react by creating'
    },
]

const App = () => { 
    return(
           <div className='container'>
        
               <Accordion items={items} />
           </div>
    )
}
ReactDom.render(<App />, document.querySelector('#container'))