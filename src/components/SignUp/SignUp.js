import React from 'react';
import logo from '../../Images/logo2.png';

const SignUp = () => {
    const handleSubmit = (e)=>{
        e.preventDefault();
      }
      const handleInputField = (e) =>{
         console.log(e.target.name,e.target.value);
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
                       <input id="input-submit" type="submit" value="Sign up" />
                   </form>
                   <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
               </div>
           </div>
       );
   };
export default SignUp;