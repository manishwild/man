import React,{useState} from 'react'
import {Link} from 'react-router-dom'



const Login =() => {

    const initialState ={
        email:'',
        password:''
    }
    const [myState, setMyState] = useState(initialState);

    console.log(myState);
    
       return(
        <React.Fragment>
        <div className="breadcrumb">
        <div className="container">
            <Link className="breadcrumb-item" to="/">Home</Link>
            <span className="breadcrumb-item active">Login</span>
        </div>
        </div>
    <section className="static about-sec">
        <div className="container">
            <h1>My Account /login</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fiveLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem </p>
            <div className="form">
                <form  >
                    <div className="row">
                        <div className="col-md-4">
                            <input type="email" name="username"  placeholder="Enter email Name" required onChange={(e) => {setMyState({...myState, email: e.target.value})}}  value={myState.email}/>
                            <span className="required-star">*</span>
                        </div>
                        <div className="col-md-4">
                            <input type="password" name="password" placeholder="Password" onChange={(e) => {setMyState({...myState, password: e.target.value})}}  required value={myState.password}/>
                            <span className="required-star">*</span>
                        </div>
                        
                        <div className="col-lg-8 col-md-12">
                            <button  className="btn black">Login</button>
                            <h5>not Registered? <Link to="/register">Register here</Link></h5>
                        </div>
                    </div>
                </form>
            </div>
      </div>
            
    </section>
    </React.Fragment>
    )

    }

    export default Login
    

