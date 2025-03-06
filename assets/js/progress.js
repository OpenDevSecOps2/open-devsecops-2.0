document.addEventListener("scroll", function () {
    let scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrollPosition = window.scrollY;
    let scrollPercentage = (scrollPosition / scrollHeight) * 100;

    let progressCircle = document.querySelector(".progress");
    let progressText = document.querySelector(".progress-text");


    let circleRadius = 16;
    let circumference = 2 * Math.PI * circleRadius;


    progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;


    let progressValue = circumference - (scrollPercentage / 100) * circumference;
    progressCircle.style.strokeDashoffset = progressValue;


    progressText.textContent = Math.round(scrollPercentage) + "%";
});
