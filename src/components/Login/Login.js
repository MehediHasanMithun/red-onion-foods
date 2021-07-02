import React from 'react';
import './Login.css';
import logo from '../../Images/logo2.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { signInWithEmail } from '../../Firebase/SIgnInManager/SignInWithEmailManager';
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { signInWithGoogle } from '../../Firebase/SIgnInManager/SignInWithGoogleManager';
import { signInWithFacebook } from '../../Firebase/SIgnInManager/SignInWithFacebookManager';

const Login = () => {
   const [user,setUser] = useState({email:"",password:""});

   const handleEmailPasswordSubmit = (e)=>{
    signInWithEmail(user.email,user.password)
    .then(res=>console.log(res));
     e.preventDefault();
   }
   const handleInputField = (e) =>{
       const newUser = {...user};
       newUser[e.target.name] = e.target.value;
       setUser(newUser);
   }

   const handleGoogleSignIn =()=>{
    signInWithGoogle()
    .then(res=>console.log(res));
   }

   const handleFacebookLogin =()=>{
       signInWithFacebook()
       .then(res=>console.log(res));
   }

    return (
        <div className="login">
            <img src={logo} alt="Logo" />
            <div className="login-form">
                <form className="input-field" onSubmit={handleEmailPasswordSubmit}>
                    <input className="email-field" onBlur={handleInputField} type="email" name="email" placeholder="Email" required /><br />
                    <input className="email-field" onBlur={handleInputField} type="password" name="password" placeholder="Password" required/><br />
                    <input id="input-submit" type="submit" value="Sign in" />
                </form>
                <br /><br />
                <p>Or Sign in with</p>
                <button onClick={handleGoogleSignIn} className="btn btn-outline-secondary">
                   <FcGoogle size="30px" />
                   <span className="logo-name">Google</span>
               </button>
               <button style={{marginLeft:"10px"}} onClick={handleFacebookLogin} className="btn btn-outline-secondary">
                   <SiFacebook size="30px" />
                   <span className="logo-name">Facebook</span>
               </button>
                <br /><br /><br />
                <p>Don't have an Account?
                    <Link to="/signup" className="btn btn-outline-danger" style={{ border: "none", fontWeight: "600",textDecoration:"none",marginLeft:"5px" }}>Sign Up</Link>
                </p>
                <br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        </div>
    );
};

export default Login;