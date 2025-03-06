document.addEventListener("scroll", function () {
    let scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrollPosition = window.scrollY;
    let scrollPercentage = (scrollPosition / scrollHeight) * 100;

    let progressCircle = document.querySelector(".progress");
    let progressText = document.querySelector(".progress-text");

    // 원의 둘레 계산 (SVG의 <circle> r값과 동일해야 함)
    let circleRadius = 16;
    let circumference = 2 * Math.PI * circleRadius;

    // stroke-dasharray 설정 (처음부터 적용)
    progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;

    // 스크롤 비율에 따라 stroke-dashoffset 조절
    let progressValue = circumference - (scrollPercentage / 100) * circumference;
    progressCircle.style.strokeDashoffset = progressValue;

    // 퍼센트 텍스트 업데이트
    progressText.textContent = Math.round(scrollPercentage) + "%";
});
