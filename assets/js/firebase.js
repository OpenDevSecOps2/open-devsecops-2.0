import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

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
export const auth = getAuth(app);
// export default auth;

// Initialize Firebase Database
export const db = getDatabase();

onAuthStateChanged(auth, (user) => {
    const uid = user.uid;
    const userRef = ref(db, "users/" + uid);
    onValue(userRef, (snapshot) => {
        if (!snapshot.exists()) {
            newUser(uid);
        }
    });
});

export const quizList = ['Introduction_to_Version_Control', 'Git_Fundamentals', 'Git_Intermediate', 'Git_Best_Practices', 'Intro_to_DevOps', "Intro_to_CI_CD", 'Containerization', 'Webhooks', 'Automated_Tests', 'Deployment', 'DevSecOps', 'Security_Checks_in_CI_CD'];
function newUser(uid) {
    for (let i = 0; i < quizList.length; i++) {
        const quizRef = ref(db, "users/" + uid + "/" + quizList[i])
        set(quizRef, {
            score: '---',
            date: '---',
            passed: false,
            status: "Incomplete"
        })
    }
}