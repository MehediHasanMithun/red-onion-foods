import React from 'react';
import { useContext } from 'react';
import { userInfoContext } from '../../App';
import { signOutManager } from '../../Firebase/SignOutManager/SignOutManager';

const SignOut = () => {
    const [userInfo,setUserInfo] = useContext(userInfoContext);
    const handleSignOut=()=>{
       signOutManager()
       .then(res=>{
           const newUserInfo ={...userInfo};
           if(!res.isSignIn){
            newUserInfo.isSignIn=false;
            newUserInfo.name="";
            newUserInfo.email="";
            newUserInfo.photo="";
            newUserInfo.emailVerified="";
            newUserInfo.errorMessage="";
            setUserInfo(newUserInfo);
           }
       });
    }
    return (
        <div>
            <button className="login-btn btn btn-outline-danger" onClick={handleSignOut}>Sign out</button>
        </div>
    );
};

export default SignOut;