document.getElementById("joinForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Show confirmation message
    document.getElementById("confirmationMessage").style.display = "block";
    
    // Clear the form after submission
    setTimeout(() => {
        document.getElementById("joinForm").reset();
        document.getElementById("confirmationMessage").classList.add("hidden");
    }, 3000);
});
