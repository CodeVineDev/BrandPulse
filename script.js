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

const elements = document.querySelectorAll('.textillate-text');

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      $(entry.target).css('opacity', 1).textillate({
        in: { 
          effect: 'fadeInUp', 
          delayScale: 0.5, // makes it faster
          delay: 20, // snappy delay between letters/words
          sync: false, // domino style
        }
      });
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 }); // Trigger earlier, so you never see it static

elements.forEach(el => observer.observe(el));
