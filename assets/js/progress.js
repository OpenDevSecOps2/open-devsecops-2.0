window.addEventListener("load", () => {
    const scrollWrapper = document.getElementById("scroll-wrapper");
  
    scrollWrapper.addEventListener("scroll", function () {
      const scrollTop = scrollWrapper.scrollTop;
      const content = document.getElementById("main-content");
  
      const maxScroll = Math.max(1, content.scrollHeight - scrollWrapper.clientHeight);
      let scrollPercent = Math.round((scrollTop / maxScroll) * 100);
      scrollPercent = Math.min(100, Math.max(0, scrollPercent));
  
      const progressCircle = document.getElementById("progress-circle");
      const progressText = document.getElementById("progress-text");
  
      const circumference = 283;
      const offset = circumference - (scrollPercent / 100) * circumference;
  
      progressCircle.style.strokeDashoffset = offset;
      progressText.textContent = scrollPercent + "%";
    });
  });
  