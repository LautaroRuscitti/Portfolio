document.addEventListener("DOMContentLoaded", function() {
    const showContactBtn = document.getElementById('show-contact-btn');
    const contactInfo = document.getElementById('contact-info');

    showContactBtn.addEventListener('click', function() {
        contactInfo.classList.toggle('show'); // Alternar clase para mostrar/ocultar
    });
});
// JavaScript para mostrar el texto después de presionar el botón
const showContactBtn = document.getElementById('show-contact-btn');
const contactInfo = document.getElementById('contact-info');

showContactBtn.addEventListener('click', function() {
    // Mostrar el texto
    contactInfo.style.display = '';
});
