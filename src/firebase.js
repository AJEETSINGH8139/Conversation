import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzRiSHW-S8WwTrn4u6KWaw26crQ7He0as",
  authDomain: "conversation-1b18e.firebaseapp.com",
  projectId: "conversation-1b18e",
  storageBucket: "conversation-1b18e.appspot.com",
  messagingSenderId: "23771069825",
  appId: "1:23771069825:web:0e5c06c70b03169f817c80",
  measurementId: "G-Z8HP51XY13"
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };

export default db;
