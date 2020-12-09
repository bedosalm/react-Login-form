import React , {Component, createRef} from 'react';
import './Contact.css';


const mys = {
   color : "red"
}

class Contact extends Component {
 constructor(props){
    super(props);
    this.state = {
       active : false,
       name : "",
       email : "",
       password : "",
      errorName : "",
      errorEmail : "",
      errorPass : ""
    }
 }

 validate = () => {

   let errorName = "";
   let errorEmail = "";
   let errorPass = "";

   if(!this.state.name){
      this.setState({
         errorName : "pass is required"
      })
   }else{
      this.setState({
         errorName : ""
      })
 }
   if(!this.state.email){
      this.setState({
         errorEmail : "pass is required"
      })
   }else{
      this.setState({
         errorEmail : ""
      })
   }
 
    if(this.state.password.length < 5){
         this.setState({
            errorPass : "pass is required"
         })
    }else{
      this.setState({
         errorPass : ""
      })
    }
// you can Abbreviate your code to this if Condation

   //  if(errorName || errorEmail || errorPass){
   //    this.setState({errorName,errorEmail,errorPass})
   //    return false
   // }
   // 
   

 }

 handelName = (e) =>{
      this.setState({
         name : e.target.value
      })
 }

 handelEmail = (e) =>{
   this.setState({
      email : e.target.value
   })
}

 handelpass = (e) =>{
   this.setState({
     password : e.target.value
   })
}






submiting = (e) =>{
e.preventDefault();
const isvalid = this.validate();
if(isvalid){
   console.log(`${this.state.name} ${this.state.email} ${this.state.password}`);

}
this.setState({
   active :!this.state.active
})

}

componentDidUpdate = () =>{

}

   render () {
      const {active} = this.state
    return (
   <div className="form-content">
      <h3>Login</h3>
       <form onSubmit={this.submiting}>
       <div>
          <label>userName</label>
          <input type="text" value={this.state.name} onChange={this.handelName}/>
          <p style={{color : "red", fontSize : "15px"}}>{this.state.errorName}</p>
       </div>
       <div>
          <label>Email</label>
          <input type="email" value={this.state.email} onChange={this.handelEmail}/>
          <p style={{color : "red", fontSize : "15px"}}>{this.state.errorEmail}</p>
       </div>
       <div>
          <label>password</label>
          <input type="password" value={this.state.password} onChange={this.handelpass}/>
          <p style={{color : "red", fontSize : "15px"}}>{this.state.errorPass}</p>
       </div>
       <div>
          <input type="submit" value="send" className={`${active ? "active" : "subBtn"}`} onClick={this.handelbutton}/>
       </div>
    </form>
   </div>
    )
   }
  }
  
  export default Contact;