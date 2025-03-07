document.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;
    let docHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrollPercent = (scrollTop / docHeight) * 100;

    scrollPercent = Math.min(100, scrollPercent);

    document.getElementById("progress-bar").style.background =
        `conic-gradient(#7253ed ${scrollPercent}%, #ccc ${scrollPercent}%)`;

    document.getElementById("progress-text").textContent = Math.round(scrollPercent) + "%";
});
