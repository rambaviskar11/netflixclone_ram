import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyALob8UKn0-NaDS9uGBFSenLCV5eT99pkE",
    authDomain: "netflix-34c9f.firebaseapp.com",
    databaseURL: "https://netflix-34c9f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "netflix-34c9f",
    storageBucket: "netflix-34c9f.appspot.com",
    messagingSenderId: "330981314108",
    appId: "1:330981314108:web:b65f286e34a7e1311ffd39"
  };

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();

const auth = firebase.auth();

export { auth };

export default db;