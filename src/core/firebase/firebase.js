import * as firebase from "firebase";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDqukwPeFeFa7opYa-ONN0aR96iGXhKkyk",
    authDomain: "react-firebase-64377.firebaseapp.com",
    databaseURL: "https://react-firebase-64377.firebaseio.com",
    projectId: "react-firebase-64377",
    storageBucket: "react-firebase-64377.appspot.com",
    messagingSenderId: "987685646386",
    appId: "1:987685646386:web:907f4270d02ee1c8674c2b",
    measurementId: "G-D1CG2T67Z6"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig );
firebase.analytics();


export default firebase;
// export const auth = firebase.auth();
// export const database = firebase.database();