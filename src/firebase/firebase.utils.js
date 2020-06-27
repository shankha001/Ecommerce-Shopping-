import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDxo9wR7ENxlRx_h-uZc3HnHeP3iKQTK_o',
  authDomain: 'crwn-db-10805.firebaseapp.com',
  databaseURL: 'https://crwn-db-10805.firebaseio.com',
  projectId: 'crwn-db-10805',
  storageBucket: 'crwn-db-10805.appspot.com',
  messagingSenderId: '233708591615',
  appId: '1:233708591615:web:6d045625d6d4b983696fca',
  measurementId: 'G-C2LJJ4T9WT',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
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
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
