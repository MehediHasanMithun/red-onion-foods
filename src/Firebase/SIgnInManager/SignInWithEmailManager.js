import firebase from "firebase/app";
import "firebase/auth";


export const signInWithEmail = (email,password)=>{
 const newUser ={name:"",email:"",emailVerified:false,isSignIn:false,errorMessage:""};
 return firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user);
    newUser.name = user.displayName;
    newUser.email = user.email;
    newUser.emailVerified = user.emailVerified;
    newUser.isSignIn = true;
    newUser.errorMessage = "";
    return newUser;
  })
  .catch((error) => {
    const errorMessage = error.message;
    newUser.name = "";
    newUser.email = email;
    newUser.emailVerified = false;
    newUser.isSignIn = false;
    newUser.errorMessage = errorMessage;
    return newUser;
  });
}