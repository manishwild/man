import React from 'react'
import Router from './Router'

class Main extends React.Component {
  render() {
    return (
      <Router>
        {this.props.children}
      </Router>

    )
  }

}

export default Main
