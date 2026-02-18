const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');
const nav = document.querySelector('#navbar');

// 1. Mobile Menu Toggle
menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// 2. Change Navbar Background on Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.style.background = '#000000';
        nav.style.height = '70px';
    } else {
        nav.style.background = '#1a1a1a';
        nav.style.height = '80px';
    }
});

// 3. Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
    });
});

// 4. Form Submission Handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Request Received! A project manager will contact you within 24 hours.');
    contactForm.reset();
});




const quoteForm = document.getElementById('quote-form');

quoteForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const btn = this.querySelector('button');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.style.opacity = '0.7';
    btn.disabled = true;

    // Simulate a network request
    setTimeout(() => {
        alert('Quote Request Sent Successfully! Our team will review your files and contact you soon.');
        btn.innerHTML = 'Get My Free Estimate';
        btn.style.opacity = '1';
        btn.disabled = false;
        quoteForm.reset();
    }, 2000);
});