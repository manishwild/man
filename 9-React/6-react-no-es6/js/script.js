class MyDiv extends React.Component {
    render() {
        return(
           <div>
               {/*calling component in react.we can call it many time  */}
        <MySpan/>
         <span>Hello World</span>
         <MySpan/>
       </div> 
       ) 
        
    }
}
class MySpan extends React.Component {
    render() {
        return <div><span> I am new line </span> <span> I am new line2 </span> </div>
    }
}
ReactDOM.render(<MyDiv/>,document.querySelector('#container'))
