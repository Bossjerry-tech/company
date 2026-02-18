
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('#nav-links');

// Toggle Mobile Menu
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
}));

// Simple Scroll Animation for Cards
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card');
    const triggerBottom = window.innerHeight / 5 * 4;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < triggerBottom) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});




/*contact section */
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Change button text to show progress
    const btn = this.querySelector('.submit-btn');
    btn.textContent = 'Sending...';
    btn.style.opacity = '0.7';

    // Simulate an API call
    setTimeout(() => {
        this.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <h3 style="color: #3b82f6; margin-bottom: 10px;">Message Sent!</h3>
                <p style="color: #94a3b8;">Jerry Softwares will get back to you within 24 hours.</p>
            </div>
        `;
    }, 1500);
});


/*toggleTheme*/
window.addEventListener("load", function () {

    // MOBILE MENU TOGGLE
    const burger = document.getElementById("mobile-menu");
    const nav = document.getElementById("nav-links");

    if (burger && nav) {
        burger.addEventListener("click", function () {
            nav.classList.toggle("nav-active");
        });
    }

    // THEME TOGGLE
    const themeToggle = document.getElementById("theme-toggle");

    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            document.body.classList.toggle("light-theme");

            // Optional: change icon
            if (document.body.classList.contains("light-theme")) {
                themeToggle.textContent = "☀️";
            } else {
                themeToggle.textContent = "🌙";
            }
        });
    }

});








