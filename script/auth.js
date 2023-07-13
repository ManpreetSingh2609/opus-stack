// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBmVurLeknRCPnyekMBTR1gxsU6PyTEBHo",
    authDomain: "opusstack.firebaseapp.com",
    projectId: "opusstack",
    storageBucket: "opusstack.appspot.com",
    messagingSenderId: "219330664372",
    appId: "1:219330664372:web:08c620713c94fa0bf304e1",
    measurementId: "G-6XBF7KM10T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const analytics = getAnalytics(app);

console.log(app);

//Getting all the HTML objects
var email = document.getElementById("email");
var password = document.getElementById("password");

// Making a function for storing data and signup
window.signup = function (e) {
    e.preventDefault();

    var obj = {
        email: email.value,
        password: password.value
    };

    createUserWithEmailAndPassword(auth, obj.email, obj.password)
        .then(function (success) {
            window.location.replace('../login.html')
            // alert("SignUp successful.")
        })
        .catch(function (err) {
            alert("error" + err)
        });
    console.log(obj);
};

// Making a function for logging in
window.login = function (e) {
    e.preventDefault();

    var obj = {
        email: email.value,
        password: password.value
    };

    signInWithEmailAndPassword(auth, obj.email, obj.password)
        .then(function (success) {
            alert("Login Successful")
            window.location.replace('../books.html')
            // alert("Login successful.")
        })
        .catch(function (err) {
            window.location.replace('../signup.html')
            alert("error" + err)
        });
    console.log(obj);
}

// window.logout = function (e) {
//     e.preventDefault();

//     var obj = {
//         email: email.value,
//         password: password.value
//     };

//     signOut(auth)
//         .then(function (success) {
//             alert("Logout Successful")
//             window.location.replace('../login.html')
//             // alert("Login successful.")
//         })
//         .catch(function (err) {
//             // window.location.replace('../signup.html')
//             alert("error" + err)
//         });
//     console.log(obj);
// }

document.getElementById("logout").addEventListener("click", function () {
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('Sign-out successful.');
        alert('Sign-out successful.');
        window.location.replace('../index.html');
        //document.getElementById('logout').style.display = 'none';
    }).catch((error) => {
        // An error happened.
        console.log('An error happened.');
    });
});
