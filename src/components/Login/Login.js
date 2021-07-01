import React from 'react';
import './Login.css';
import logo from '../../Images/logo2.png';
const Login = () => {
   const handleSubmit = (e)=>{
     e.preventDefault();
   }
   const handleInputField = (e) =>{

   }
    return (
        <div className="login">
            <img src={logo} alt="Logo" />
            <div className="login-form">
                <form className="input-field"onSubmit={handleSubmit}>
                    <input onBlur={handleInputField} type="text" name="name" placeholder="Name" required /><br />
                    <input onBlur={handleInputField} type="email" name="email" placeholder="Email" required /><br />
                    <input onBlur={handleInputField} type="password" name="password" placeholder="Password" required/><br />
                    <input onBlur={handleInputField} type="password" name="confirmPassword" placeholder="Confirm Password" required /><br />
                    <input id="input-submit" type="submit" value="Sign in" />
                </form>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        </div>
    );
};

export default Login;