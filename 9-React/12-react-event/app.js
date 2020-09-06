import React from 'react'
import ReactDOM from 'react-dom'
import Form from './components/form'
import ShowImages from './components/ShowImage'
import Time from './components/time'
import getImages from './services/pixavay'
import Paging from "./components/Paging";


class App extends React.Component{
    constructor(props){
        super(props)
        //comoponent refrence  must be created on constructor
        this.spinnerRef = React.createRef()
    }   
    state = {totalImages:null, imagesList:[], searchWord: null, color: null}
    search = (searchWord,color,pageNumber) => {
        this.spinnerRef.current.classList.add('active')
            //console.log(searchWord, color, 'search');
            getImages(searchWord, color, pageNumber).then(data => {
                this.spinnerRef.current.classList.remove('active')
                console.log(data);
                this.setState({totalImages: data.total, imagesList:[...data.hits], searchWord: searchWord, color: color})
            }).catch(error => {
                this.spinnerRef.current.classList.remove('active')
                console.log(error);
            })
        }
        goTopage = (num) => {
            this.search(this.state.searchWord, this.state.color,num)
        }
    render(){
        // let foundMessage = ''
        // if (this.state.totalImages != null) {
        //     foundMessage = 'Found: ' + this.state.totalImages + ' Images'
        // }
        // let obj = {
        //     text:'Enter yor Search Key',
        //     something:'it is something'
        // }
        return (
            // let foundMessage = '' if (this.state.totalImages != null) {     foundMessage
    // = 'Found: ' + this.state.totalImages + ' Images' }
           <div className="ui segment">
                <Time />
                <Form  text='Enter yor  KeyWord' runSearch={this.search} />
                {/* {foundMessage} */}
                {this.state.totalImages != null ? 'Found: ' + this.state.totalImages + ' Images' :''}
                <ShowImages images={this.state.imagesList} />
                {/* {this.state.totalImages != null ? <Pagging /> : ''} */}
                <Paging totalImages={this.state.totalImages} runPage={this.goTopage} />
                <div ref={this.spinnerRef} className="ui  dimmer">
                <div className="ui text loader">Loading</div>
                </div>
                <p></p>
             </div>
        )
    }
}














ReactDOM.render(<App />,document.querySelector('#container'))