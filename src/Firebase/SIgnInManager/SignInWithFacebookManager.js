import firebase from "firebase/app";
import "firebase/auth";

export const signInWithFacebook = () => {
    const newUser ={name:"",email:"",emailVerified:false,isSignIn:false,errorMessage:""};

    let provider = new firebase.auth.FacebookAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
            //var credential = result.credential;
            // The signed-in user info.
            var user = result.user;
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            //var accessToken = credential.accessToken;
           //console.log(user);
            newUser.name = user.displayName;
            newUser.email = user.email;
            newUser.emailVerified = user.emailVerified;
            newUser.isSignIn = true;
            newUser.errorMessage = "";
            return newUser;
           
        })
        .catch((error) => {
            // Handle Errors here.
           // var errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            newUser.name = "";
            newUser.email = email;
            newUser.emailVerified =false;
            newUser.isSignIn = false;
            newUser.errorMessage = errorMessage;
            return newUser;
        });

}