import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "../FirebaseConfig/firebaseConfig";

export const initializeFirebaseApp = ()=>{
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app(); // if already initialized, use that one
    }
}

const sendEmailVerification=()=>{
    firebase.auth().currentUser.sendEmailVerification()
  .then(() => {
    // Email verification sent!
    // ...
  });
}


const updateUserInfo = name =>{
    const user = firebase.auth().currentUser;

user.updateProfile({
  displayName: name
}).then(() => {
  // Update successful
  // ...
  sendEmailVerification();
}).catch((error) => {
  // An error occurred
  // ...
}); 
}

export const createUserWithEmailAndPassword =(name,email,password)=>{

return firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log("SignIn user",user);
    updateUserInfo(name);
    return user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    return errorMessage;
  });

}

