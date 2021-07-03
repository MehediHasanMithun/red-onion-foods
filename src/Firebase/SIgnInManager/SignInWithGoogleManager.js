import firebase from "firebase/app";
import "firebase/auth";

export const signInWithGoogle = () => {
    const newUser ={name:"",email:"",emailVerified:false,isSignIn:false,errorMessage:""};

    let provider = new firebase.auth.GoogleAuthProvider();
     return firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            // var credential = result.credential;
            // This gives you a Google Access Token. You can use it to access the Google API.
            //var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(user);
            newUser.name = user.displayName;
            newUser.email = user.email;
            newUser.emailVerified = user.emailVerified;
            newUser.isSignIn = true;
            newUser.errorMessage = "";
            return newUser;

        }).catch((error) => {
            // Handle Errors here.
           // var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
           // var credential = error.credential;
            // ...
            newUser.name = "";
            newUser.email = email;
            newUser.emailVerified =false;
            newUser.isSignIn = false;
            newUser.errorMessage = errorMessage;
            return newUser;
        });

}