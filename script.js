
  // Select all navbar links
  const navLinks = document.querySelectorAll('.nav-link');
  const navbarCollapse = document.getElementById('collapsibleNavbar');

  const images = [
    "./image/Bathroom.jpg",
    "./image/Bathroom1.jpg",
    "./image/Bedroom1.jpg",
    "./image/Bedroom2.jpg",
    "./image/Bedroom3.jpg",
    "./image/Bedroom4.jpg",
    "./image/Bedroom.jpg",
    "./image/LivingRoom.jpg",
    "./image/LivingRoom1.jpg",
    "./image/LivingRoom2.jpg",
    "./image/Kitchen.jpg",
    "./image/Kitchen1.jpg",
    "./image/Kitchen2.jpg",
    "./image/OutsideBar.jpg",
    "./image/Pool.jpg",
    "./image/Pool1.jpg",
    "./image/PoolAtNight.jpg",
    "./image/PoolAtNight1.webp",
    "./image/View.jpg",
    "./image/VillaOutside1.jpg",
    "./image/VillaOutside2.jpg",
    "./image/VillaOutside3.jpg",
    "./image/VillaOutside4.jpg",
    "./image/VillaOutside5.jpg",
    "./image/VillaOutside6.jpg",
    "./image/VillaOutside7.jpg"
]

let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = images[currentIndex];
    lightbox.style.display = "flex";
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = images[currentIndex];
}


document.addEventListener("DOMContentLoaded", function () {
    const navbarCollapse = document.getElementById("collapsibleNavbar");
    const navbarToggler = document.querySelector(".navbar-toggler");

    // Close navbar when clicking a nav-link
    document.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", () => {
            if (navbarCollapse.classList.contains("show")) {
                new bootstrap.Collapse(navbarCollapse).hide();
            }
        });
    });

    // Ensure navbar toggler opens and closes the menu correctly
    navbarToggler.addEventListener("click", () => {
        const isExpanded = navbarToggler.getAttribute("aria-expanded") === "true";
        if (!isExpanded) {
            new bootstrap.Collapse(navbarCollapse).show();
        }
    });
});

