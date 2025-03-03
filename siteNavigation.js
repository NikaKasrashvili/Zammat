// Script to handle active navigation
document.addEventListener("DOMContentLoaded", function () {
  // Get all sections
  const sections = document.querySelectorAll("section[id]");

  // Get all navigation links
  const navLinks = document.querySelectorAll(".nav-links a");

  // Add click event listener to each link
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Remove active class from all links
      navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
      });

      // Add active class to clicked link
      this.classList.add("active");
    });
  });

  // Check if URL has a hash and activate corresponding link on page load
  function setActiveNavFromHash() {
    const hash = window.location.hash;
    if (hash) {
      // Remove active class from all links
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      // Find the link that matches the hash and add active class
      const activeLink = document.querySelector(`.nav-links a[href="${hash}"]`);
      if (activeLink) {
        activeLink.classList.add("active");
      } else {
        // Default to home if no matching link found
        document
          .querySelector('.nav-links a[href="#hero"]')
          .classList.add("active");
      }
    } else {
      // If no hash, set home as active
      document
        .querySelector('.nav-links a[href="#hero"]')
        .classList.add("active");
    }
  }

  // Set active nav on page load
  setActiveNavFromHash();

  // Listen for hash changes (browser back/forward buttons)
  window.addEventListener("hashchange", setActiveNavFromHash);
});
