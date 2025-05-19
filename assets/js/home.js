import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { auth, db, quizList } from '../js/firebase.js';
import { ref, get } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

onAuthStateChanged(auth, (user) => {
    if (user) {
        // Display user name when signed in
        const header = document.querySelector('#welcome-to-the-devsecops-curriculum-');
        const name = user.displayName;
        header.textContent = 'Welcome, ' + name + '!👋';

        // Show some detail about the user
        const p = document.querySelector('main > p');
        getQuizzes(user.uid).then(total => {
            p.textContent = 'You are currently ' + total + " quizzes away from being certified. Keep it going! 🔥"; 
        });
    }
});

async function getQuizzes(uid) {
    let total = 0;

    for (let i = 0; i < quizList.length; i++) {
        const quizRef = ref(db, "users/" + uid + "/" + quizList[i])
        const snapshot = await get(quizRef);
        const data = snapshot.val();

        if (!data.passed) {
            total++;
        }
    }
    return total;
}