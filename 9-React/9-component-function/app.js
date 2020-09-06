import React from 'react'
import ReactDOM from 'react-dom'
//***** */ function component
const App = () => {
   // return <div>Hi There!</div>
   const text = 'Enter your Name'
   return(
       <div>
           <label className='label' htmlFor='name'>{text}</label>
            <input type="text" id="name" style={{backgroundColor:'yellow',color:'blue'}} />
       </div>
   )

}

//******** class component */
// class App extends React.Component{
//     render(){
//         return <div>Hi There!</div>
//     }
// }
ReactDOM.render(<App />,document.querySelector('#container'))