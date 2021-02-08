// we first need to import the firebase
import firebase from "firebase/app";
// from the imported firebase we can use the necessary imports
// we import firestore for db and auth for authentication
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyDWRUSFWMTb58yuM0XZ5nvoGObI3csCKsM",
  authDomain: "crwn-db-902a5.firebaseapp.com",
  projectId: "crwn-db-902a5",
  storageBucket: "crwn-db-902a5.appspot.com",
  messagingSenderId: "524556700563",
  appId: "1:524556700563:web:a16f905575910a85717666",
  measurementId: "G-86S4ZPZ1MR",
};
// initialize firebase using the config
firebase.initializeApp(config);
// export firebase.auth(); anywhere we want to use authentication
export const auth = firebase.auth();
// export firebase db
export const firestore = firebase.firestore();
// setup google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
// takes custom provider
// prompt the google choose account modal
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
// export firebase incase we want the whole library
export default firebase;
