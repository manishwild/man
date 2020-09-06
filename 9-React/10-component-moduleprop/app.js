import React from 'react'
import ReactDOM from 'react-dom'
import Comment from './components/comment'
import ApprovalCard from './components/approvialCard'


const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        hey i am beautiful card
      </ApprovalCard>
      <ApprovalCard>
        <Comment starColor="red" rate="2 star" text = "Nice comment" />
      </ApprovalCard>
     
     <Comment starColor="yellow" rate="4 star" text = "good comment" />
     <Comment starColor="blue" rate="5 star" text = "Nice meaning " />
    </div>

  )
}
ReactDOM.render(
  <App/>, document.querySelector('#container'))