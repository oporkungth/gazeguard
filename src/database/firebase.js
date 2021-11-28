import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDQf1OQp0Sn_qBhiznI5zFhZ7o1l1zbRzI",
  authDomain: "gazeguard-a4d92.firebaseapp.com",
  databaseURL: "https://gazeguard-a4d92-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gazeguard-a4d92",
  storageBucket: "gazeguard-a4d92.appspot.com",
  messagingSenderId: "204843954742",
  appId: "1:204843954742:web:6edb2f4ce52e4864615e97",
  measurementId: "G-KZFNGJY8DW"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account"});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

const db = firebase.database();

const rootRef = firebase.database().ref().child('react');
firebase.get(firebase.child(rootRef, "MpaAra2BCp2LDoM_q8f")).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

export default firebase;