// Change navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    function toggleContent() {
      var moreContent = document.getElementById("more-content");
      var btn = document.getElementById("read-more-btn");

      // Toggle the visibility of the extra content
      if (moreContent.style.display === "none") {
        moreContent.style.display = "block";
        btn.textContent = "Read Less"; // Change button text to "Read Less"
      } else {
        moreContent.style.display = "none";
        btn.textContent = "Read More"; // Change button text back to "Read More"
      }
    }
  });
  