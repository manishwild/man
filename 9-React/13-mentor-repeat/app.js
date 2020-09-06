import React from 'react'
import ReactDOM from 'react-dom'
import Search from './components/search'
import getData from './services/ikea'
import Time from './components/time'
import paging from './components/Paging'
import ShowProduct from './components/ShowProduct'


class App extends React.Component{
    constructor(props){
        super(props)
    } 
    state = {keyWords: null, page: 20, num:20, searchResult:[]}
    search =(keyWords,page,num) => {
        getData(keyWords,page,num).then(data => {
            console.log(data);
            this.setState({totalImages: data.total, productList:[...data.results[o].hits],keyWords:keyWords,page:page,num:hitsPerPage})
        }).catch(error => {
            console.log(error);
        })
    }
    componentDidMount = () => {

    }
    render(){
        return(
            <div  className="ui segment">
            <Time />
               <Search  text='Enter yor  KeyWord' runSearch={this.search}   />  
               {/* <ShowProduct product={this.state.productsList} /> */}
            </div>
        )
    }
}

ReactDOM.render(<App />,document.querySelector('#container'))