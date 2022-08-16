import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDW_3BKhM-gGY3Jg1IhQF9AEczZHIui2SE",
    authDomain: "firegram-c9e09.firebaseapp.com",
    projectId: "firegram-c9e09",
    storageBucket: "firegram-c9e09.appspot.com",
    messagingSenderId: "862718678321",
    appId: "1:862718678321:web:5c69b44f14ca4ceae94c10"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp};