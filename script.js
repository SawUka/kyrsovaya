// Функция для плавного скроллинга
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Настройка Intersection Observer
const observerOptions = {
  threshold: 0.2,
};

const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
document.querySelectorAll("[data-animate]").forEach((el) => {
  observer.observe(el);
});

// Логика слайдера
let slideIndex = 1;
let isTransitioning = false;
showSlides(slideIndex);

function moveSlide(n) {
  if (!isTransitioning) {
    isTransitioning = true;
    showSlides((slideIndex += n));
    setTimeout(() => {
      isTransitioning = false;
    }, 500);
  }
}

function currentSlide(n) {
  if (!isTransitioning) {
    isTransitioning = true;
    showSlides((slideIndex = n));
    setTimeout(() => {
      isTransitioning = false;
    }, 500);
  }
}

function showSlides(n) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const sliderContainer = document.querySelector(".slider-container");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  sliderContainer.style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === slideIndex - 1);
  });
}
// Логика фильтра для галереи

// Телефон
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("call-form");
  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");
  const nameError = document.getElementById("name-error");
  const phoneError = document.getElementById("phone-error");
  const errorSummary = document.getElementById("error-summary");

  form.addEventListener("submit", (e) => {
    let isValid = true;

    // Проверка имени
    if (nameInput.value.trim() === "") {
      nameError.style.display = "block";
      nameInput.style.borderColor = "#ff4d4d";
      isValid = false;
    } else {
      nameError.style.display = "none";
      nameInput.style.borderColor = "#ccc";
    }

    // Проверка телефона
    if (phoneInput.value.trim() === "") {
      phoneError.style.display = "block";
      phoneInput.style.borderColor = "#ff4d4d";
      isValid = false;
    } else {
      phoneError.style.display = "none";
      phoneInput.style.borderColor = "#ccc";
    }

    // Если есть ошибки, показать общее сообщение
    if (!isValid) {
      errorSummary.style.display = "block";
      e.preventDefault();
    } else {
      errorSummary.style.display = "none";
      e.preventDefault();
    }
  });
});
function handleCall() {
  alert("Ваш звонок принят. В скорейшем времени мы вам позвоним!");
}
// Анимация
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".animate-fade");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  animatedElements.forEach((element) => observer.observe(element));
});
