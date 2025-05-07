---
layout: custom
title: Profile
nav_order: 0
has_children: false
---

<body>
    <h2 class='heading'><strong>Profile</strong></h2>
    <div class='profile-container'></div>
</body>

<script type='module'>
    import auth from '../../assets/js/signin.js';
    import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

    const div = document.querySelector('.profile-container');

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
            p.className = 'user-name'
            info.appendChild(p);

            const p1 = document.createElement('p');
            p1.textContent = user.email;
            info.appendChild(p1);

            const p2 = document.createElement('p');
            p2.textContent = 'Member since: ' + user.metadata.creationTime;
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
        } else {
            // space showing that a user is not signed in
            const container = document.querySelector('.profile-container');
            container.className = 'profile-container signed-out'
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
    .profile-container {
        display: flex;
        border: 1px solid #cccccc;
        margin: 50px auto;
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
        border: 1px solid black;
    }

    .heading {
        margin-bottom: 0;
        color: #7253ed;
    }

    .user-name {
        font-weight: bold;
    }

    .sign-out {
        color: #B22222;
        border: 2px solid #B22222;
        border-radius: 10px;
        background: rgba(222, 106, 106, 0.4);
        padding: 10px;
        margin-left: 70px;
    }

    .sign-in {
        color: green;
        border: 2px solid green;
        border-radius: 10px;
        padding: 10px;
        background: rgba(147, 225, 147, 0.4);
    }

    .signed-out {
        justify-content: center;
    }
</style>