document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('formResponse').textContent = 'Thank you for your message!';
    document.getElementById('formResponse').classList.remove('hidden');
    this.reset();
});
