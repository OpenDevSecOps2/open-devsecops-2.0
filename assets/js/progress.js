document.addEventListener("scroll", function() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    let scrollPercent = Math.round((scrollTop / docHeight) * 100);
    scrollPercent = Math.min(100, scrollPercent);

    const progressCircle = document.getElementById("progress-circle");
    const progressText = document.getElementById("progress-text");

    const circumference = 283; // 2πr = 2 * 3.14 * 45
    const offset = circumference - (scrollPercent / 100) * circumference;

    progressCircle.style.strokeDashoffset = offset;
    progressText.textContent = scrollPercent + "%";
});
