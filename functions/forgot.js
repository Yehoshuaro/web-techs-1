document.getElementById('forgot-password-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = e.target.email.value;
    console.log('Instructions to reset your password have been sent to your email:', email);
    alert('Instructions to reset your password have been sent to your email.');
});