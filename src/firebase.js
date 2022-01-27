import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export const auth = firebase.initializeApp ({
  apiKey: "AIzaSyDXibsZgEWdrrhiZYoPPjP41102b9Tkldk",
  authDomain: "messenger-72657.firebaseapp.com",
  projectId: "messenger-72657",
  storageBucket: "messenger-72657.appspot.com",
  messagingSenderId: "637765958076",
  appId: "1:637765958076:web:0783516ff63e16bf5313b9"
}).auth();
