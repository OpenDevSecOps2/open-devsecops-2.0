import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

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
export default auth;

let ul = document.querySelector('.aux-nav-list');

// create sign in button
let button = document.createElement('button');
button.textContent = 'Sign in';

button.style.margin = '5px';
button.style.borderRadius = '10px';
button.style.border = '1px solid #7253ed';
button.style.color = '#7253ed';
button.style.fontWeight = 'bold';
button.style.background = 'rgba(220, 217, 234, 0.4)';

button.addEventListener('click', () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
});

// Create user image for later use
const profileImage = document.createElement('img');
profileImage.id = 'profile-pic';
profileImage.style.borderRadius = '50%';
profileImage.style.border = '1px solid black';
profileImage.style.width = '45px';
profileImage.style.height = '45px';
profileImage.style.verticalAlign = 'middle';
profileImage.style.marginTop = 'auto';
profileImage.style.marginBottom = 'auto';
profileImage.style.marginLeft = '5px';

// Checks whether or not someone has signed in
onAuthStateChanged(auth, (user) => {
    if (user) {
        profileImage.src = user.photoURL;
        profileImage.alt = 'Profile Picture';

        // if signed in show sign in button with profile 
        if (ul.contains(button)) {
            ul.removeChild(button);
        }
        ul.append(profileImage);
    } else {
        // if not signed in show sign in button
        ul.appendChild(button);
    }
});

// Redirects to profile page when clicked
profileImage.addEventListener('click', () => {
    
});

console.log("Calling signin.js works");