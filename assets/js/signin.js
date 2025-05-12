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
profileImage.alt = 'Profile Picture';
profileImage.style.borderRadius = '50%';
profileImage.style.width = '45px';
profileImage.style.height = '45px';

// Checks whether or not someone has signed in
onAuthStateChanged(auth, (user) => {
    if (user) {
        if (ul.contains(button)) {
            ul.removeChild(button);
        }
        
        // if signed in show sign in button with profile 
        const link = document.createElement('a');
        profileImage.src = user.photoURL;

        link.style.verticalAlign = 'middle';
        link.style.margin = '7px';

        link.href = "{{ '/docs/other/profile.html' | relative_url }}";

        link.appendChild(profileImage);
        ul.append(link);

        // Add profile info to top
        const div = document.createElement('div');

        // div CSS
        div.style.marginTop = '12px';

        const p1 = document.createElement('p');
        p1.textContent = user.displayName;
        p1.style.fontWeight = 'bold'
        div.appendChild(p1)

        // p1 CSS
        p1.style.margin = '0';

        const p2 = document.createElement('p');
        p2.textContent = user.email;
        div.appendChild(p2);

        // p2 CSS
        p2.style.margin = '0';

        ul.append(div);
    } else {
        // if not signed in show sign in button
        ul.appendChild(button);
    }
});

// Redirects to profile page when clicked
profileImage.addEventListener('click', () => {
    
});