import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBLbjY0OgDYXUqHT9h0R_20EuJ5Q18TYLY",
    authDomain: "tech-ajay-project.firebaseapp.com",
    databaseURL: "https://tech-ajay-project.firebaseio.com",
    projectId: "tech-ajay-project",
    storageBucket: "tech-ajay-project.appspot.com",
    messagingSenderId: "293724494249",
    appId: "1:293724494249:web:b5406f43f26b2931674cb8",
    measurementId: "G-QZBLQEB0DP"
  };
  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });;
  export default firebase;