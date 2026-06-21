document.getElementById('bookClassForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let date = document.getElementById('date').value;

    if (name && email && phone && date) {
        document.getElementById('message').textContent = `Thank you, ${name}! Your free class is booked for ${date}.`;
        document.getElementById('bookClassForm').reset();
    } else {
        document.getElementById('message').textContent = "Please fill in all the fields.";
    }
});
