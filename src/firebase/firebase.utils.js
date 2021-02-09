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
// making api request so async function
// userAuth - userauth object is returned from firebase when we login
//additionalData -
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if no user Auth object we must signout
  if (!userAuth) return;
  // find the user id
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  //check snapshot if userAuth already exists in our db
  const snapShot = await userRef.get();
  console.log("snapShot", snapShot);
  if (!snapShot.exists) {
    // use documentRef to store data if snapshot does not exist
    //create the data usinfg our userAuth object from google firebase
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
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
