import firebase from 'firebase/app';
import 'firebase/auth';
import { initializeApp } from "firebase/app";
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCWSN_oHuni-0bwe_Q9Ujyt4k04fXZaZ8I",
  authDomain: "hello-react-a494e.firebaseapp.com",
  projectId: "hello-react-a494e",
  storageBucket: "hello-react-a494e.appspot.com",
  messagingSenderId: "545315841994",
  appId: "1:545315841994:web:2b80f45f6444d57f941133"
});

export default firebaseConfig;

export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account"});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

