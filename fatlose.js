document.addEventListener("DOMContentLoaded", function () {
    const fatLossSection = document.querySelector(".fat-loss-container");
    const discoverBtn = document.querySelector(".cta-btn");

    
    fatLossSection.style.display = "none";

   
    discoverBtn.addEventListener("click", function () {
        if (fatLossSection.style.display === "none") {
            fatLossSection.style.display = "block";
            fatLossSection.style.opacity = "0";
            setTimeout(() => {
                fatLossSection.style.opacity = "1";
                fatLossSection.style.transition = "opacity 0.8s ease-in-out";
            }, 50);
        } else {
            fatLossSection.style.opacity = "0";
            setTimeout(() => {
                fatLossSection.style.display = "none";
            }, 800);
        }
    });
});
