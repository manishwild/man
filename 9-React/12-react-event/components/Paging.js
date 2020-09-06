import React from 'react';

class Paging extends React.Component {
  state = {pageNumber:1}
  onNextclick = () => {
    this.props.runPage(this.state.pageNumber + 1)
    this.setState({pageNumber: this.state.pageNumber + 1})
  }
    render(){
        if (this.props.totalImages) {
          return (
            <div className="ui floated menu">
        <a className="icon item">
          <i className="left chevron icon"></i>
        </a>
        <input style={{width: '50px'}} type="number"/>
        <a onClick={this.onNextclick} className="icon item">
          <i className="right chevron icon"></i>
        </a>
      </div>
        )  
        } else {
            return <div></div>
        }
        
    }
}

export default Paging