import React from 'react'
import {Link} from 'react-router-dom'
import validator from 'validator'
import { registerPost } from '../services/api'
import PopUpModal from './PopUpModal'

class Register extends React.Component{
   
    state ={
        email: '',
        password: '',
        repassword:'',
        errorCompenent: null,
        showErrorModal: false,
        resultElement:null
    }
    onRegisterBtnclick = (e) => {
        e.preventDefault()
        console.log(this.state);
        if (this.state.email.trim() ==='' || this.state.password === '' || this.state.password !== this.state.repassword || !validator.isEmail(this.state.email.trim())) {
        const errorSElement = (
            <ul>
                {this.state.email.trim() === ''?<li>Email should not be empty</li> : null}
                {!validator.isEmail(this.state.email.trim()) ?<li>Email should not be empty</li> : null}
                {this.state.password === ''?<li>password should not be empty</li> : null}
                {this.state.password !== this.state.repassword?<li>password is not matching the repassword</li> : null}
            </ul>
        )
       
        this.setState({
            errorCompenent:errorSElement,
            showErrorModal: true
        }) 
    } else {
     registerPost(this.state.email,this.state.password,this.state.repassword).then(data => {
          console.log(data);
          let badgeClass =''
          let badgeMsg = ''
          if(data === 1){
            
          }
          switch (data) {
              case 1:
                  badgeClass = "alert alert-success",
                  badgeMsg = "Register sucefull"
                  break;
            case 2:
            case 4:    
                  badgeClass = "alert alert-danger",
                  badgeMsg = "Server side Error"
                    break; 
            case 3:
                   badgeClass = "alert alert-danger",
                   badgeMsg = "user exist please use new email"
                    break;         
              default:
                  break;
          }
          const badge = (
            <div className={badgeClass} role="alert">
            {badgeMsg}
            </div>
          )
          this.setState({
            resultElement: badge
          })
     }).catch (error => {
        const badge = ( 
         <div className="alert alert-danger" role="alert">
            cannot send the data
            </div>)
this.setState({
        resultElement: badge
      })
     })
     
    }
     }
     closeModal = () => {
         console.log('i m called from child');
         this.setState({
            showErrorModal: false
        }) 

     }

    render(){
       return(
           <React.Fragment>
           <PopUpModal show={this.state.showErrorModal} close={this.closeModal} className="bg-danger" title="Entry Error">
           {this.state.errorCompenent}
           </PopUpModal>
           <div className="breadcrumb">
        <div className="container">
            <Link     className="breadcrumb-item" to="/">Home</Link>
            <span   className="breadcrumb-item active">Register</span>
        </div>
        </div>
    <section className="static about-sec">
        <div className="container">
            <h1>My Account / REgister</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fiveLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem </p>
            <div className="form">
                <form >
                    <div className="row">
                    <div className="col-lg-12 col-md-12">
                       {this.state.resultElement}
                        </div>
                        <div className="col-md-4">
                            <input type="email" name="username"  placeholder="Enter User Email" value={this.state.email} onChange={(e) =>{this.setState({email:e.target.value})}} required/>
                            <span className="required-star">*</span>
                        </div>
                        <div className="col-md-4">
                            <input type="password" name="password"  placeholder="Password"value={this.state.password} onChange={(e) =>{this.setState({password:e.target.value})}}  required/>
                            <span className="required-star">*</span>
                        </div>
                        <div className="col-md-4">
                            <input type="password" name="password"  placeholder="Repeat Password" value={this.state.repassword} onChange={(e) =>{this.setState({repassword:e.target.value})}} required/>
                            <span className="required-star">*</span>
                        </div>
                        <div className="col-lg-8 col-md-12">
                            <button className="btn black " onClick ={this.onRegisterBtnclick}>Register</button>
                            <h5>not Registered? <Link to="/login">Login here</Link></h5>
                        </div>
                       
                    </div>
                </form>
            </div>
        </div>
    </section>
    </React.Fragment>
    )
} 
    }
    

export default Register