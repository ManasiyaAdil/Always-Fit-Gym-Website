document.getElementById("weightGainBtn").addEventListener("click", function() {
    let infoBox = document.getElementById("infoBox");

    if (infoBox.classList.contains("show")) {
        infoBox.classList.remove("show");
        setTimeout(() => {
            infoBox.classList.add("hidden");
        }, 500); 
    } else {
        infoBox.classList.remove("hidden");
        setTimeout(() => {
            infoBox.classList.add("show");
        }, 10);
    }
});