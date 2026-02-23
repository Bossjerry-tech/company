
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('#nav-links');

/*Toggle Mobile Menu*/
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

/* Close mobile menu when clicking a link*/
document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
}));

/*Simple Scroll Animation for Cards*/
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
    
    /* Change button text to show progress*/
    const btn = this.querySelector('.submit-btn');
    btn.textContent = 'Sending...';
    btn.style.opacity = '0.7';

    /* Simulate an API call*/
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
document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;

    /* Load preference*/
    if (localStorage.getItem('jerry-theme') === 'light') {
        body.classList.add('light-mode');
        themeBtn.innerHTML = '☀️';
    }

    themeBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const isLight = body.classList.contains('light-mode');
        
        /* Visual feedback*/
        themeBtn.style.transform = 'scale(0.8)';
        setTimeout(() => {
            themeBtn.innerHTML = isLight ? '☀️' : '🌙';
            themeBtn.style.transform = 'scale(1)';
        }, 150);

        localStorage.setItem('jerry-theme', isLight ? 'light' : 'dark');
    });
});
/*icons on scroll*/
/*Function to show/hide floating buttons on scroll*/
window.addEventListener('scroll', () => {
    const floatingGroup = document.querySelector('.floating-contact');
    
    /* Show icons after scrolling 400px down*/
    if (window.scrollY > 400) {
        floatingGroup.classList.add('show');
    } else {
        floatingGroup.classList.remove('show');
    }
});

/* Optional: Add a subtle 'bounce' every 10 seconds to catch attention*/
setInterval(() => {
    const whatsapp = document.querySelector('.whatsapp');
    if (whatsapp && document.querySelector('.floating-contact').classList.contains('show')) {
        whatsapp.style.transform = 'scale(1.2)';
        setTimeout(() => whatsapp.style.transform = 'scale(1)', 300);
    }
}, 10000);







