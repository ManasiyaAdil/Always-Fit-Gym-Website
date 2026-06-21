document.addEventListener("DOMContentLoaded", function () {
    const infoSection = document.querySelector(".fitness-info");
    const learnBtn = document.querySelector(".cta-btn");

    infoSection.style.display = "none";

    learnBtn.addEventListener("click", function () {
        if (infoSection.style.display === "none") {
            infoSection.style.display = "block";
            setTimeout(() => {
                infoSection.style.opacity = "1";
                infoSection.style.transition = "opacity 0.8s ease-in-out";
            }, 50);
        } else {
            infoSection.style.opacity = "0";
            setTimeout(() => {
                infoSection.style.display = "none";
            }, 800);
        }
    });
});