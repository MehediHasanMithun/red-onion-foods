import React from 'react';
import './Login.css';
import logo from '../../Images/logo2.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { signInWithEmail } from '../../Firebase/SIgnInManager/SignInWithEmailManager';
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { signInWithGoogle } from '../../Firebase/SIgnInManager/SignInWithGoogleManager';
import { signInWithFacebook } from '../../Firebase/SIgnInManager/SignInWithFacebookManager';
import { useContext } from 'react';
import { userInfoContext } from '../../App';

const Login = () => {
    let history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    //console.log("from",from);
    const [userInfo,setUserInfo] = useContext(userInfoContext);
   const [user,setUser] = useState({email:"",password:""});
  
   const handleEmailPasswordSubmit = (e)=>{
    signInWithEmail(user.email,user.password)
    .then(res=>{
       const newUserInfo ={...userInfo};
       newUserInfo.email = res.email;
       newUserInfo.name = res.name;
       newUserInfo.emailVerified = res.emailVerified;
       newUserInfo.isSignIn = res.isSignIn;
       newUserInfo.errorMessage = res.errorMessage;
       setUserInfo(newUserInfo);
       if(newUserInfo.isSignIn)
       history.replace(from);
      // history.push("/");
    });
     e.preventDefault();
   }


   const handleInputField = (e) =>{
       const newUser = {...user};
       newUser[e.target.name] = e.target.value;
       setUser(newUser);
   }

   const handleGoogleSignIn =()=>{
    signInWithGoogle()
    .then(res=>{
        const newUserInfo ={...userInfo};
        newUserInfo.email = res.email;
        newUserInfo.name = res.name;
        newUserInfo.emailVerified = res.emailVerified;
        newUserInfo.isSignIn = res.isSignIn;
        newUserInfo.errorMessage = res.errorMessage;
        setUserInfo(newUserInfo);
        if(newUserInfo.isSignIn)
        history.replace(from);
         //history.push("/");
    });
   }

   const handleFacebookLogin =()=>{
       signInWithFacebook()
       .then(res=>{
        const newUserInfo ={...userInfo};
        newUserInfo.email = res.email;
        newUserInfo.name = res.name;
        newUserInfo.emailVerified = res.emailVerified;
        newUserInfo.isSignIn = res.isSignIn;
        newUserInfo.errorMessage = res.errorMessage;
        setUserInfo(newUserInfo);
        if(newUserInfo.isSignIn)
        history.replace(from);
       // history.push("/");
       });
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
                <br />
                {
                    userInfo.isSignIn ? <p style={{color:"green"}}>Mr. {userInfo.name} Sign In successfully</p> : <p style={{color:"red"}}>{userInfo.errorMessage}</p>
                }
                <br /><br /><br /><br /><br /><br />
            </div>
        </div>
    );
};

export default Login;