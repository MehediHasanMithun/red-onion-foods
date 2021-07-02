import firebase from "firebase/app";
import "firebase/auth";


export const signInWithEmail = (email,password)=>{

 return firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
    return user;
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    return errorMessage;
  });
}