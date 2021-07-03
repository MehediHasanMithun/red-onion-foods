import firebase from "firebase/app";
import "firebase/auth";

export const signOutManager = ()=>{
  const newUser ={isSignIn: true};
   return firebase.auth().signOut().then(() => {
        // Sign-out successful.
        newUser.isSignIn = false;
        return newUser;
      }).catch((error) => {
        // An error happened.
        newUser.isSignIn = true;
        return newUser;
      });
      
}