import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDBIVCITPmSJhEsO2rd-6aX9TsP4Yj9_XA",
  authDomain: "clothing-web-app-1c780.firebaseapp.com",
  projectId: "clothing-web-app-1c780",
  storageBucket: "clothing-web-app-1c780.appspot.com",
  messagingSenderId: "968939642878",
  appId: "1:968939642878:web:da948c8cf4f91c5d79eaaf",
  measurementId: "G-QG3J6JFV2F",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
