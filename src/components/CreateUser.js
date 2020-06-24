import React from "react";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "*******",
  authDomain: "react-example-26243.firebaseapp.com",
  databaseURL: "https://react-example-26243.firebaseio.com",
  projectId: "react-example-26243",
  storageBucket: "react-example-26243.appspot.com",
  messagingSenderId: "552439870652",
  appId: "1:552439870652:web:75130398ac3460805f4cb9",
  measurementId: "G-4JLD26QVTV"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function test(){
  let emailInput = document.getElementById('email');
  var actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be whitelisted in the Firebase Console.
    url: 'https://react-example-26243.firebaseapp.com/finishSignUp?cartId=1234',
    // This must be true.
    handleCodeInApp: true,
  };
  
  firebase.auth().sendSignInLinkToEmail(emailInput.value, actionCodeSettings)
  .then(function() {
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    window.localStorage.setItem('emailForSignIn', emailInput.value);
    console.log("Email sent!")
  })
  .catch(function(error) {
    // Some error occurred, you can inspect the code: error.code
    console.log(error);
  });

}

export default function CreateUser() {
    return (
      <div>
        <h2>Create User</h2>
        <input id="email" type="email"/> 
        <div></div>
        <button onClick={test}>Click me</button>
      </div>
    );
  }