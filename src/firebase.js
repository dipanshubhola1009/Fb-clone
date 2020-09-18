import firebase from 'firebase'



const firebaseConfig = {
    apiKey: "AIzaSyAttG4tYKQnkzxLi9FL4I-GmPYKmekEOSY",
    authDomain: "fb-clone-52e7e.firebaseapp.com",
    databaseURL: "https://fb-clone-52e7e.firebaseio.com",
    projectId: "fb-clone-52e7e",
    storageBucket: "fb-clone-52e7e.appspot.com",
    messagingSenderId: "504356606580",
    appId: "1:504356606580:web:baf642989f627d2ec3f721",
    measurementId: "G-66V937B4MQ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const database= firebaseApp.database();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth , provider , database}
export default db;