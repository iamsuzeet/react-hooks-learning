import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//get this from firebase
const config = {
  apiKey: "AIzaSyA2jleEOvz0FOr_pPOh8Cp0VZmpN-9dUf0",
  authDomain: "ecomclothing-db.firebaseapp.com",
  databaseURL: "https://ecomclothing-db.firebaseio.com",
  projectId: "ecomclothing-db",
  storageBucket: "ecomclothing-db.appspot.com",
  messagingSenderId: "62199830982",
  appId: "1:62199830982:web:2eb3aaccf34492b1603ac7",
  measurementId: "G-NXMEY9TQPT"
};

//initialization start here
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if null
  if (!userAuth) return;

  const userRef = await firestore.doc(`users/${userAuth.uid}`);
  // const collectionRef = await firestore.collection("users");
  // const collectionSnapshot = await collectionRef.get();
  // console.log({ collection: collectionSnapshot.docs.map(coll => coll.data()) });

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    console.log(newDocRef);
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshopToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((reduced, collection) => {
    reduced[collection.title.toLowerCase()] = collection;
    return reduced;
  }, {});

  //restructuring for fetch

  // const transformedCollection = collections.documents.map(doc => {
  //   const {
  //     title: { stringValue },
  //     items: {
  //       arrayValue: { values }
  //     }
  //   } = doc.fields;
  //   const item = values.map(value => {
  //     const {
  //       mapValue: {
  //         fields: { name }
  //       }
  //     } = value;

  //     console.log(name);
  //   });
  //   console.log(item);
  // });
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

//for auth and firestore access
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//for popup login
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
