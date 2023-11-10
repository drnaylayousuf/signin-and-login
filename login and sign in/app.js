
var firebaseConfig = {
  apiKey: "AIzaSyBIHFGR-97FT64fSaQA0dzMEOwOiqgdiWc",
  authDomain: "sign-and-log-in.firebaseapp.com",
  projectId: "sign-and-log-in",
  storageBucket: "sign-and-log-in.appspot.com",
  messagingSenderId: "1039724538414",
  appId: "1:1039724538414:web:cc278d998fc294b58d8dbf"
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);


// console.log(app.auth);
function signup (){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

console.log(email.value, password.value);


firebase
.auth()
.createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;

    console.log(user);

    firebase.auth().currentUser.sendEmailVerification()
  .then(() => {

    alert( "Email verification sent!");
   
  });



    
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;

    console.log(errorMessage);
  
  });

}


function login(){

  var email = document.getElementById("mail");
    var password = document.getElementById("pass");




    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });
}


function resetpass() {


  var email = document.getElementById("mail");

  firebase.auth().sendPasswordResetEmail(email.value)
  .then(() => {
   alert("Password reset email sent!");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });
}




function openwithgoogle() {

  var provider = new firebase.auth.GoogleAuthProvider();


  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;


    console.log(user);

    // IdP data available in result.additionalUserInfo.profile.
      // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    console.log(errorMessage);


    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

}


function github() {
  var provider = new firebase.auth.GithubAuthProvider();



  firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    var token = credential.accessToken;

    // The signed-in user info.
    var user = result.user;


    console.log(user);
    // IdP data available in result.additionalUserInfo.profile.
      // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}