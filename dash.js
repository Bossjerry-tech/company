// Select DOM elements
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const mobileOverlay = document.getElementById('mobileOverlay');

/**
 * Toggle Sidebar Logic
 */
function toggleMenu() {
    sidebar.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    
    // Prevent body scrolling when menu is open on mobile
    if (sidebar.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Event Listeners
menuToggle.addEventListener('click', toggleMenu);
mobileOverlay.addEventListener('click', toggleMenu);

/**
 * Handle Window Resizing
 * If the user expands the window while the mobile menu is open, 
 * we clean up the active states.
 */
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        sidebar.classList.remove('active');
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
});

/**
 * Active Link Highlighting
 * Adds a visual "active" class to the clicked sidebar link
 */
const navLinks = document.querySelectorAll('.sidebar-nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});