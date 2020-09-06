import React from 'react'

class Search extends React.Component{
    state = {keyWord:null,}

    onInputChange=(e)=>{
        this.setState({keyWord:e.target.value})      
       
        //alert('hi') 
    }
    onFormSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state.keyWord);
        if (this.state.keyWord) {
            this.props.runSearch(this.state.keyWord, 20, 1)
        } 
        
    }

    render(){
        return(
            <div >
            <form className="ui form" onSubmit={this.onFormSubmit}>
                 <div className="field">
                 <label>{this.props.text}</label>
                <input type="text"  onChange={this.onInputChange} placeholder="Search"/>
                </div>
                    
                 <button className="ui positive basic button" >Search</button>
                </form>
            </div>
        )
    }
}
export default Search