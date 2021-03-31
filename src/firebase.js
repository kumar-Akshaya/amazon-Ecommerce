import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCUsNFXUfkCUoEVr0LpdSCG3dUQGa4-nno",
  authDomain: "shop-abf45.firebaseapp.com",
  projectId: "shop-abf45",
  storageBucket: "shop-abf45.appspot.com",
  messagingSenderId: "365790381874",
  appId: "1:365790381874:web:66b38b62b168d6104e792b",
  measurementId: "G-4SMZ8HTEL9",
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
