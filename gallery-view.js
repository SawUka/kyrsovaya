let slideIndex = 1;

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const initialImage = urlParams.get("image");
  slideIndex = initialImage ? parseInt(initialImage) : 1;
  showSlides(slideIndex);
});

function moveSlide(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  const slides = document.querySelectorAll(".slide");
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  slides.forEach((slide) => (slide.style.display = "none"));
  slides[slideIndex - 1].style.display = "block";
}

function closeGallery() {
  window.location.href = "http://127.0.0.1:5500/index.html#gallery";
}
