
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobile-nav");
  const closeIcon = document.getElementById("close-icon");

  hamburger.addEventListener("click", () => {
    mobileNav.classList.remove("translate-x-full");
    mobileNav.classList.add("translate-x-0");
  });

  closeIcon.addEventListener("click", () => {
    mobileNav.classList.remove("translate-x-0");
    mobileNav.classList.add("translate-x-full");
  });

