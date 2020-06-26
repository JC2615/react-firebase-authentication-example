const express = require('express')
const app = express()
const cors = require('cors');
const port = 8080

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

app.use(express.json());
app.use(cors());

app.post('/CreateUser', (req, res) => {
    console.log(req.body);
    firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password)
    .then(data => {
        res.send('User created!')
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))