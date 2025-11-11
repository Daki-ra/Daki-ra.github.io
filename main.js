function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");

  if (mobileMenu.classList.contains("active")) {
    mobileMenu.classList.remove("active");
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
  } else {
    mobileMenu.classList.add("active");
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
  }
}

// Close mobile menu when clicking on links
document.querySelectorAll(".mobile-nav .nav-item").forEach((link) => {
  link.addEventListener("click", () => {
    const mobileMenu = document.getElementById("mobileMenu");
    const menuIcon = document.querySelector(".menu-icon");
    const closeIcon = document.querySelector(".close-icon");

    mobileMenu.classList.remove("active");
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
  });
});

// Close mobile menu when window is resized to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    const mobileMenu = document.getElementById("mobileMenu");
    const menuIcon = document.querySelector(".menu-icon");
    const closeIcon = document.querySelector(".close-icon");

    mobileMenu.classList.remove("active");
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
});
