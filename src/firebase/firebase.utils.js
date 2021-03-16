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
//add collection from json to firebase db
//async is used because batch will return a promise
export const addCollectionAndDocuments = async (
  collectionKey,
  objectstoAdd
) => {
  // create collection using collectionKey
  //firebase will return as a ref object
  const collectionRef = firestore.collection(collectionKey);
  console.log("collectionRef", collectionRef);
  // batch the request so all the data will be saved in a single go
  const batch = firestore.batch();
  objectstoAdd.forEach((obj) => {
    const newDocref = collectionRef.doc();
    console.log("newDocref", newDocref);
    batch.set(newDocref, obj);
  });
  // commit will fire of our batch request, it will return a promise
  return await batch.commit();
};
export const convertCollectionsSnapshotToMapCollections = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      //encodeURI js method -pass it a string and it will give us back a string where any characters a url cannot actually handle or process such as certain symbol,spaces or whatever that we never see in a url, encodeURI convert it into a version which url can read
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  console.log(
    "transformedCollection--as array of objects",
    transformedCollection
  );
  // reduce example
  /*
  const array1 = [1, 2, 3, 4];
  // 5 + 1 + 2 + 3 + 4
  console.log(array1.reduce(reducer, 5));
  // expected output: 15
  */
  // convert array of objects to object of objects
  // keep the object property as a titlename(from the array) for each respective object
  //{hats:{id:1,title:hats:...},jackets:{id:2,title:jackets:...},...}
  return transformedCollection.reduce((accumulator, collection) => {
    // set property of object key as title for each respective collection
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
    // pass in initial object
  }, {});
};
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
