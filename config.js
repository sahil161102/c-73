import firebase from "firebase"
require ("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyBrc0UmtipejOfZSPLBFXhFJARAASF90cE",
    authDomain: "e-library-a2675.firebaseapp.com",
    projectId: "e-library-a2675",
    storageBucket: "e-library-a2675.appspot.com",
    messagingSenderId: "282681108886",
    appId: "1:282681108886:web:2dfde8b1be9f100e5055b7"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  export default  firebase.firestore()

  // firebase.initializeApp(firebaseConfig)
  // export default firebase.firestore();

