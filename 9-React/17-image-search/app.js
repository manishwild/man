import React,{useState,useEffect} from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/SearchBar'
import ShowImages from './components/showImages'
import getData from './services/pixabay'


 const App = () => {
     
     const defaultState = {results:[],searchWord:'',color:null,pageNum:1,perPage:4}

     const [myState, setMyState] = useState(defaultState);


   const search = (keyWord, color) => {
        if (keyWord) {
            getData(keyWord, color, 4, 1).then(data => {
                console.log(data);
                setMyState({searchWord: keyWord, color:color, pageNum:1, perPage:4, results: [...data.hits]})
            })
        } else {
            //setMyState({searchWord: "", color:"", pageNum:1, perPage:4, results: []})
            setMyState({...myState,results:[]})
        }
    }

    const goNext = () => {
        getData(myState.searchWord,myState.color, myState.perPage,myState.pageNum + 1).then(data => {
            setMyState({searchWord:myState.searchWord,color:myState.color,pageNum:myState.pageNum + 1, results: [...myState.results, ...data.hits]})
        })
    }


   
        return(
            <div className='container'>
            <SearchBar runSearch={search} />
            {myState.results.length ?<ShowImages images={myState.results} runNext={goNext} /> : ''}
            
            </div> 
        )
    
 }
    



// class App extends React.Component{

//     state = {results:[],searchWord:'',color:null,pageNum:1,perPage:4}

//     search = (keyWord, color) => {
//         if (keyWord) {
//             getData(keyWord, color, 4, 1).then(data => {
//                 console.log(data);
//                 this.setState({searchWord: keyWord, color:color, pageNum:1, perPage:4, results: [...data.hits]})
//             })
//         } else {
//             this.setState({results: []})
//         }
//     }

//     goNext = () => {
//         getData(this.state.searchWord,this.state.color, this.state.perPage,this.state.pageNum + 1).then(data => {
//             this.setState({pageNum:this.state.pageNum + 1, results: [...this.state.results, ...data.hits]})
//         })
//     }


//     render(){
//         return(
//             <div className='container'>
//             <SearchBar runSearch={this.search} />
//             {this.state.results.length ?<ShowImages images={this.state.results} runNext={this.goNext} /> : ''}
            
//             </div> 
//         )
//     }
// }

ReactDOM.render(<App />, document.querySelector('#container'))