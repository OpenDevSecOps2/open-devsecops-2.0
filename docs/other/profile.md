---
layout: custom
title: Profile
nav_order: -1
has_children: false
---

<body id='body-info'>
    <h2 class='heading'><strong>Profile</strong></h2>
    <div class='container' id='profile'></div>
</body>

<script type='module'>
    import { auth } from '../../assets/js/firebase.js';
    import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

    const div = document.querySelector('#profile');

    onAuthStateChanged(auth, (user) => {
        div.innerHTML = '';

        if (user) {
            // user is signed in so show this
            const img = document.createElement('img');
            img.src = user.photoURL;
            img.alt = 'Profile Photo';
            img.className = 'profile-img container-element';

            div.appendChild(img);

            // user information
            const info = document.createElement('div');
            info.className = 'container-element';
            div.appendChild(info);

            const p = document.createElement('p');
            p.textContent = user.displayName;
            p.className = 'user-name container-text';
            info.appendChild(p);

            const p1 = document.createElement('p');
            p1.textContent = user.email;
            p1.className = 'container-text';
            info.appendChild(p1);

            const p2 = document.createElement('p');
            p2.textContent = 'Member since: ' + user.metadata.creationTime;
            p2.className = 'container-text';
            info.appendChild(p2);

            // add sign out button to change users if needed
            const button = document.createElement('button');
            button.textContent = 'Sign Out';
            button.className = 'container-element sign-out';

            button.addEventListener('click', () => {
                auth.signOut();
                window.location.reload();
            })

            div.appendChild(button);

            // Add Certification Progress div
            const body = document.querySelector('main');

            const certHeader = document.createElement('h2');
            certHeader.className = 'heading';
            certHeader.textContent = 'Certification Progress';
            certHeader.style.fontWeight = 'bold';
            body.appendChild(certHeader);

            const cert = document.createElement('div');
            cert.className = 'container';
            body.appendChild(cert);

            const certification = document.createElement('img');
            certification.src = '../../assets/images/certificate.jpg';
            certification.alt = 'DevSecOps Certificate';
            certification.className = 'container-element cert';
            cert.append(certification);

            const progress = document.createElement('div');
            progress.className = 'container-element';
            cert.append(progress);

            const label = document.createElement('p');
            label.textContent = 'DevSecOps Professional Certification';
            label.style.fontSize = '20px'
            label.style.fontWeight = 'bold';
            progress.appendChild(label);

            const claimBtn = document.createElement('button');
            claimBtn.textContent = 'Claim Certificate';
            claimBtn.className = 'container-element claim-certificate';
            // claimBtn.addEventListener('click', () => {
            //     window.open('/certificate-claim', '_blank');
            // });
            cert.append(claimBtn);


            // Add Quiz Performance div
            const quizHeader = document.createElement('h2');
            quizHeader.className = 'heading';
            quizHeader.textContent = 'Quiz Performance';
            quizHeader.style.fontWeight = 'bold';
            body.appendChild(quizHeader);

            const quiz = document.createElement('div');
            quiz.className = 'container';
            body.appendChild(quiz);

        } else {
            // space showing that a user is not signed in
            const container = document.querySelector('#profile');
            container.className = 'container signed-out'
            const button = document.createElement('button');
            container.appendChild(button);

            button.textContent = 'Sign in';
            button.className = 'container-element sign-in';
            button.addEventListener('click', () => {
                const provider = new GoogleAuthProvider();
                return signInWithPopup(auth, provider);
            });
        }
    });
</script>

<style>
    .container {
        display: flex;
        border: 1px solid #cccccc;
        margin: 20px auto;
        justify-content: left;
        align-items: center;
        margin-top: 5px;
        background: #f9f9f9;
        border-radius: 10px;
    }

    .container-element {
        margin: 15px;
    }

    .profile-img {
        border-radius: 50%;
    }

    .heading {
        margin-top: 15px;
        padding-top: 15px;
        margin-bottom: 0;
        color: #7253ed;
    }

    .user-name {
        font-weight: bold;
        font-size: 20px;
    }

    .sign-out {
        color: #B22222;
        border: 2px solid #B22222;
        border-radius: 10px;
        background: rgba(222, 106, 106, 0.4);
        padding: 10px;
        margin-left: 70px;
    }

    .sign-out:hover { 
        background: rgba(192, 57, 43, 0.35);
        cursor: pointer;
    }

    .sign-in {
        color: green;
        border: 2px solid green;
        border-radius: 10px;
        padding: 10px;
        background: rgba(147, 225, 147, 0.4);
    }

    .sign-in:hover {
        background: rgba(165, 214, 167, 0.8);
        cursor: pointer;
    }

    .signed-out {
        justify-content: center;
    }

    .cert {
        width: 150px;
        height: auto;
        border-radius: 10px;
    }

    .container-text {
        margin: 3px;
    }

    .claim-certificate {
        margin-left: auto;
        color: rgb(21, 55, 208);
        border: 2px solid rgb(22, 22, 148);
        background: rgba(21, 55, 208, 0.1);
        padding: 10px;
        border-radius: 10px;
    }

    .claim-certificate:hover {
    background: rgba(21, 55, 208, 0.2);
    cursor: pointer;
}
</style>