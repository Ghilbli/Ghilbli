
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

function openMenu() {
    document.getElementById("mobileMenu").classList.add("open");
    document.getElementById("overlay").classList.add("show");
  }

  function closeMenu() {
    document.getElementById("mobileMenu").classList.remove("open");
    document.getElementById("overlay").classList.remove("show");
  }

  