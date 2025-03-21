document.getElementById('loginBtn').addEventListener('click', function() {
    $('#loginModal').modal('show');
});

document.getElementById('reserveBtn').addEventListener('click', function() {
    $('#reserveModal').modal('show');
});

document.getElementById('loginClose').addEventListener('click', function() {
    $('#loginModal').modal('hide');
});

document.getElementById('reserveClose').addEventListener('click', function() {
    $('#reserveModal').modal('hide');
});

// JavaScript for form validation



// Login form validation
document.getElementById('loginModal').addEventListener('submit', function(event) {
    const email = document.getElementById('Email').value;
    const password = document.getElementById('Password').value;

    if (!email || !password) {
        event.preventDefault();
        alert('Please fill in both email and password.');
    }
});

// Reservation form validation
document.getElementById('reserveModal').addEventListener('submit', function(event) {
    const guests = document.querySelector('input[name="inlineRadioOptions"]:checked');
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (!guests || !date || !time) {
        event.preventDefault();
        alert('Please fill in all fields for reservation.');
    }
});
