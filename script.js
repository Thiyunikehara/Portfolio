// Change navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
});

// Toggle "Read More" functionality for blog articles
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('read-more-btn')) {
        const btn = e.target;
        const blogContent = btn.closest('.blog-content');
        const moreContent = blogContent.querySelector('.blog-more');

        const isVisible = window.getComputedStyle(moreContent).display !== "none";
        
        if (isVisible) {
            moreContent.style.display = "none";
            btn.textContent = "Read More";
            blogContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            moreContent.style.display = "block";
            btn.textContent = "Read Less";
        }
    }
});

  