import React from 'react'
import {Link,useLocation, useHistory} from 'react-router-dom'
import { connect } from 'react-redux';

const Admin = (props) => {
    // const location = useLocation()
    // const history = useHistory()

    // if (!location.state) {
    //     history.push('/login')
    // }
   
    // console.log('location',location);
    // console.log('history',history);
    console.log('props',props);
  
    return (
      <div>
        <section className="slider">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Welcome {props.user}</h2>
                <Link to="/admin/addbook">ADD Book</Link>
                <br/>
                <Link to="/admin/mybooks">My Book</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  
}
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
}
}
export default connect(mapStateToProps)(Admin)