import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, initializeFirebaseApp } from '../../Firebase/SignUpManager/SignUpManager';
import logo from '../../Images/logo2.png';
import './SignUp.css';

initializeFirebaseApp();

const SignUp = () => {
   const [user,setUser] =useState({name:"",email:"",password:"",confirmPassword:""});
   const [error,setError] = useState({password:false,confirmPassword:false});
    const handleSubmit = (e)=>{
       // console.log(user);
        if(user.password!==user.confirmPassword){
            const newError ={...error};
            newError.confirmPassword = true;
           setError(newError);
        }
        else{
            const newError ={...error};
            newError.confirmPassword = false;
            setError(newError);
        }

        if(!error.password && !error.confirmPassword){
            createUserWithEmailAndPassword(user.name,user.email,user.password)
            .then(res=>console.log("from sign up",res));
        }

        e.preventDefault();
      }
      const handleInputField = (e) =>{
          let formValid = true;
         if(e.target.name==="password"){
            formValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(e.target.value);
         }
         if(!formValid){
            const newError ={...error};
            newError.password=true;
           setError(newError);
         }
         else{
            const newError ={...error};
            newError.password=false;
           setError(newError);
         }
         if(formValid){
         const newUser = {...user};
         newUser[e.target.name] = e.target.value;
         setUser(newUser);
         }
      }
       return (
           <div className="login">
               <img src={logo} alt="Logo" />
               <div className="login-form">
                   <form className="input-field"onSubmit={handleSubmit}>
                       <input className="name-field" onBlur={handleInputField} type="text" name="name" placeholder="Name" required /><br />
                       <input className="email-field" onBlur={handleInputField} type="email" name="email" placeholder="Email" required /><br />
                       <input onBlur={handleInputField} type="password" name="password" placeholder="Password" required/><br />
                       <small style={{marginLeft:"250px",color:"red",visibility:error.password?"visible":"hidden"}}>*Minimum eight characters, at least one letter, one number and one special character</small><br />
                       <input onBlur={handleInputField} type="password" name="confirmPassword" placeholder="Confirm Password" required /><br />
                       <small style={{marginRight:"130px",color:"red",visibility:error.confirmPassword?"visible":"hidden"}}>*Password not match</small><br />
                       <input id="input-submit" type="submit" value="Sign up" />
                   </form>
                   <br /><br />
                   <p>Already have an Account?  
                    <Link to="/login" className="btn btn-outline-danger" style={{ border: "none", fontWeight: "600",textDecoration:"none",marginLeft:"5px"}}>Sign In</Link>
            </p>
                   <br /><br /><br /><br /><br /><br /><br /><br />
               </div>
           </div>
       );
   };
export default SignUp;