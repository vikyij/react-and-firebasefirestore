import * as firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBszTO-LjvZbbIa_DbqlQPw9_St3BHZrCI",
    authDomain: "tutorial-711cd.firebaseapp.com",
    databaseURL: "https://tutorial-711cd.firebaseio.com",
    projectId: "tutorial-711cd",
    storageBucket: "tutorial-711cd.appspot.com",
    messagingSenderId: "161352767748",
    appId: "1:161352767748:web:1c7b33a49c2481eec0d851"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()