---
layout: custom
title: Profile
nav_order: -1
has_children: false
---
<div id="modal" class="modal hidden">
  <div class="modal-content">
    <span id="modal-close" class="modal-close">&times;</span>
    <p id="modal-message"></p>
  </div>
</div>

<body id='body-info'>
    <h2 class='heading'><strong>Profile</strong></h2>
    <div class='container' id='profile'></div>
</body>

<script type='module'>
    import { auth, quizList, db } from '../../assets/js/firebase.js';
    import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
    import { ref, get } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

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

            const progressText = document.createElement('p');
            progressText.className = 'container-text'
            progress.appendChild(progressText);
            progressText.style.color = '#444';
            progressText.style.marginTop = '5px';
            progressText.style.fontStyle = 'italic';

            // Claim Certificate Button
            const claimBtn = document.createElement('button');
            claimBtn.textContent = 'Claim Certificate';
            claimBtn.className = 'container-element claim-certificate';
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

            // Add Quiz Table
            const table = document.createElement('table');

            const thead = document.createElement('thead');
            const headerRow = document.createElement('tr');
            const headers = ['Quiz Name', 'Score', 'Date Completed', 'Status']
            headers.forEach(label => {
                const th = document.createElement('th');
                th.textContent = label;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);
            table.appendChild(thead);
            quiz.appendChild(table);

            let completedCount = 0;

            Promise.all(quizList.map(async (quizName) => {
                const tr = document.createElement('tr');

                const name = document.createElement('td');
                name.textContent = quizName.split('_').join(' ');
                tr.appendChild(name);

                const quizRef = ref(db, 'users/' + user.uid + '/' + quizName);
                const [scoreVal, dateVal, statusVal] = await getData(quizRef);

                const score = document.createElement('td');
                score.textContent = scoreVal || 'N/A';
                tr.appendChild(score);

                const date = document.createElement('td');
                date.textContent = dateVal || 'N/A';
                tr.appendChild(date);

                const status = document.createElement('td');
                status.className = 'status';
                const statusPic = document.createElement('p');
                statusPic.textContent = statusVal || 'Incomplete';

                if ((statusVal || '').trim() === 'Passed') {
                    statusPic.className = 'status-passed';
                    completedCount++;
                } else {
                    statusPic.className = 'status-failed';
                }

                status.appendChild(statusPic);
                tr.appendChild(status);
                table.appendChild(tr);
                
            })).then(() => {
                progressText.textContent = `${completedCount}/12 chapters completed`;

                claimBtn.addEventListener('click', () => {
                    if (completedCount >= 9) {
                        const name = user.displayName || 'Your Name';
                        const date = new Date().toLocaleDateString();
                        generateCertificateWithName(name, date);
                        
                    } else {
                        showModal(`❌ You need at least 9 completed quizzes to claim the certificate.\n✅ Currently completed: ${completedCount}/12`);
                    }
                });
            });

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

    async function getData(quizRef) {

        const snapshot = await get(quizRef);
        const data = snapshot.val();

        return [data.score, data.date, data.status];
    }

    function generateCertificateWithName(name, date) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const image = new Image();

    image.src = '../../assets/images/certificate.jpg';

    image.onload = () => {
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0);

        // Date of Completion
        ctx.font = 'italic 60px Times New Roman';
        ctx.fillStyle = '#000';
        ctx.textAlign = 'left';
        ctx.fillText(date, 275, 850);

        // Name
        ctx.font = '100px Times New Roman';
        ctx.fillStyle = '#000';
        ctx.textAlign = 'left';
        ctx.fillText(name, 275, 1050);

        // Download Image
        const link = document.createElement('a');
        const safeName = name.replace(/[^a-z0-9_\- ]/gi, '_');
        link.download = `${safeName}_DevSecOps_Certificate.jpg`;
        link.href = canvas.toDataURL();
        link.click();
    };
}

    // modal
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    const modalClose = document.getElementById('modal-close');

    // open the modal
    function showModal(message) {
        modalMessage.textContent = message;
        modal.classList.remove('hidden');
        modal.style.display = 'block';
    }

    // close the modal
    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // close the modal when clicking outside the modal content 
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
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

    td {
        text-align: center;
    }

    th {
        background: #f2f2f2;
        border-radius: 10px;
    }

    .status-passed {
        border: 2px solid green;
        border-radius: 20px;
        background: rgba(147, 225, 147, 0.4);
        color: green;
        text-align: center;
        margin-left: 20px;
        margin-right: 20px;
    }

    .status-failed {
        border: 2px solid #B22222;
        border-radius: 20px;
        background: rgba(222, 106, 106, 0.4);
        color: #B22222;
        text-align: center;
        margin-left: 20px;
        margin-right: 20px;
    }
        .modal {
        display: none;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0,0,0,0.4);
        }

        .modal-content {
            background-color: #fff;
            margin: 15% auto;
            padding: 20px;
            border-radius: 10px;
            border: 1px solid #888;
            width: 80%;
            max-width: 530px;
            text-align: center;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
            position: relative;
        }

        .modal-close {
            position: absolute;
            top: 0px;
            right: 10px;
            color: #aaa;
            font-size: 24px;
            font-weight: bold;
            cursor: pointer;
        }

        .modal-close:hover,
        .modal-close:focus {
            color: black;
        }
</style>