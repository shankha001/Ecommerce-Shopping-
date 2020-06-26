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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
