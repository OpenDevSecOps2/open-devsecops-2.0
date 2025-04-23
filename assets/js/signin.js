import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAuQtSCv4zEp9g7i-x9MgGGmRwv0AYhB2g",
    authDomain: "open-devsecops-2.firebaseapp.com",
    projectId: "open-devsecops-2",
    storageBucket: "open-devsecops-2.firebasestorage.app",
    messagingSenderId: "169628474124",
    appId: "1:169628474124:web:aa40d6306545d26e820729"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let ul = document.querySelector('.aux-nav-list');

let button = document.createElement('button');
button.textContent = 'Sign in'
button.addEventListener('click', () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
})

ul.appendChild(button)

console.log("Calling signin.js works")