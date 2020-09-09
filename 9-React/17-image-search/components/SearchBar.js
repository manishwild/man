import React,{useState, useEffect,useRef} from 'react'


const SearchBar = (props) => {

  const [searchWord, setsearchWord] = useState('');
  const [color, setcolor] = useState('');

const onSeachInpchange = (e)=>{
    setsearchWord(e.target.value)
    //console.log(this.state.searchWord);

}
// componentDidUpdate(){
//     console.log(this.state.searchWord);
// }
const onColorSelectChange = (e) => {
  console.log(e.target.value);
  setcolor(e.target.value)
}
const onSearchBtnClick = () => { 
    props.runSearch(searchWord,color)
}


return (
  <div className='row'>
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <button className="btn btn-outline-secondary" type="button" onClick={onSearchBtnClick}>Search</button>
      </div>
      <div className="field">
                    <select onChange={onColorSelectChange}>
                        <option value="">Choose Color</option>
                        <option value="grayscale">grayscale</option> 
                        <option value="transparent">transparent</option> 
                        <option value="red">red</option> 
                        <option value="orange">orange</option> 
                        <option value="yellow">yellow</option> 
                        <option value="green">green</option> 
                        <option value="turquoise">turquoise</option> 
                        <option value="blue">blue</option> 
                        <option value="lilac">lilac</option> 
                        <option value="pink">pink</option>
                        <option value="white">white</option> 
                        <option value="gray">gray</option> 
                        <option value="black">black</option> 
                        <option value="brown">brown</option>
                    </select>
                </div>
      <input
        type="text"
        className="form-control"
        placeholder="Type some thing to search"
        value={searchWord}
        onChange={onSeachInpchange}
        />
    </div>
  </div>


)
}

// class SearchBar extends React.Component {
//     state ={searchWord:'',color:null}
    
//     onSeachInpchange = (e)=>{
//         this.setState({searchWord:e.target.value})
//         //console.log(this.state.searchWord);

//     }
//     // componentDidUpdate(){
//     //     console.log(this.state.searchWord);
//     // }
//     onColorSelectChange = (e) => {
//       console.log(e.target.value);
//       this.setState({color: e.target.value})
//   }
//     onSearchBtnClick = () => { 
//         this.props.runSearch(this.state.searchWord,this.state.color)
//     }

//   render() {
//     return (
//       <div className='row'>
//         <div className="input-group mb-3">
//           <div className="input-group-prepend">
//             <button className="btn btn-outline-secondary" type="button" onClick={this.onSearchBtnClick}>Search</button>
//           </div>
//           <div className="field">
//                         <select onChange={this.onColorSelectChange}>
//                             <option value="">Choose Color</option>
//                             <option value="grayscale">grayscale</option> 
//                             <option value="transparent">transparent</option> 
//                             <option value="red">red</option> 
//                             <option value="orange">orange</option> 
//                             <option value="yellow">yellow</option> 
//                             <option value="green">green</option> 
//                             <option value="turquoise">turquoise</option> 
//                             <option value="blue">blue</option> 
//                             <option value="lilac">lilac</option> 
//                             <option value="pink">pink</option>
//                             <option value="white">white</option> 
//                             <option value="gray">gray</option> 
//                             <option value="black">black</option> 
//                             <option value="brown">brown</option>
//                         </select>
//                     </div>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Type some thing to search"
//             value={this.state.searchWord}
//             onChange={this.onSeachInpchange}
//             />
//         </div>
//       </div>
//     )
//   }
// }
export default SearchBar