document.addEventListener("DOMContentLoaded", function () {
    const discoverBtn = document.querySelector(".discover-btn");
    const strategyContainer = document.getElementById("strategyContainer");

    
    discoverBtn.addEventListener("click", function () {
        if (strategyContainer.classList.contains("hidden")) {
            strategyContainer.classList.remove("hidden");
            discoverBtn.textContent = "Hide Running Info";
        } else {
            strategyContainer.classList.add("hidden");
            discoverBtn.textContent = "Discover Running";
        }
    });
});
