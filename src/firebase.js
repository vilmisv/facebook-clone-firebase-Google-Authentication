import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyApmoy1TtqzHozvKK19BtyGQSFW2-yv5ok",
    authDomain: "facebook-clone-vilmanto.firebaseapp.com",
    projectId: "facebook-clone-vilmanto",
    storageBucket: "facebook-clone-vilmanto.appspot.com",
    messagingSenderId: "127586042877",
    appId: "1:127586042877:web:c8036fcbf3d52eb49f4f94",
    measurementId: "G-V6MYGW1KZ5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}
export default db;