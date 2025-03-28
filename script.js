const links = document.querySelectorAll('.navbar__links a');
const currentPage = window.location.pathname.split("/").pop(); // this gets just the filename

links.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const sliderTrack = document.querySelector('.slider-track');
  const slides = document.querySelectorAll('.slide');

  // Duplicate slides for seamless effect
  slides.forEach(slide => {
      let clone = slide.cloneNode(true);
      sliderTrack.appendChild(clone);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const tstmSliderTrack = document.querySelector('.testimonial__slider-track');
  const tstmSlides = document.querySelectorAll('.testimonial__slide');

  // Duplicate slides for seamless effect
  tstmSlides.forEach(slide => {
      let clone = slide.cloneNode(true);
      tstmSliderTrack.appendChild(clone);
  });
});

