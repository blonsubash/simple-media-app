import firebase from "firebase";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDszT2T0RdOVJdwE-y9qf__w-CTu17U-3s",
  authDomain: "webo-assignment-a10fe.firebaseapp.com",
  projectId: "webo-assignment-a10fe",
  storageBucket: "webo-assignment-a10fe.appspot.com",
  messagingSenderId: "188372967708",
  appId: "1:188372967708:web:b022a426639f6507f3dad9",
  measurementId: "G-LZ36L53D34",
  storageBucket: "gs://webo-assignment-a10fe.appspot.com",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
