import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import auth from '../js/signin.js';

onAuthStateChanged(auth, (user) => {
    if (user) {
        // Display user name when signed in
        const header = document.querySelector('#welcome-to-the-devsecops-curriculum-');
        const name = user.displayName;
        header.textContent = 'Welcome, ' + name + '!👋';

        // Show some detail about the user
        const p = document.querySelector('main > p');
        const num = '???'
        p.textContent = 'You are currently ' + num + " quizzes away from being certified. Keep it going! 🔥"; 
    }
});