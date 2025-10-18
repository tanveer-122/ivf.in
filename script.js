const slides = document.querySelectorAll(".slide");
const dotsContainer = document.getElementById("dots");
let current = 0;

// Create dots dynamically
slides.forEach((_, i) => {
  const btn = document.createElement("button");
  btn.addEventListener("click", () => goTo(i));
  dotsContainer.appendChild(btn);
});
const dots = dotsContainer.querySelectorAll("button");

function updateSlides() {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === current);
    dots[i].classList.toggle("active", i === current);
  });
}

function goTo(index) {
  current = (index + slides.length) % slides.length;
  updateSlides();
}

function nextSlide() {
  goTo(current + 1);
}

function prevSlide() {
  goTo(current - 1);
}

document.getElementById("next").addEventListener("click", nextSlide);
document.getElementById("prev").addEventListener("click", prevSlide);

// Auto slide
setInterval(nextSlide, 5000);
updateSlides();

// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();
