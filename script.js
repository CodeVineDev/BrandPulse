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

document.addEventListener("DOMContentLoaded", function () {
  const typewriterElements = document.querySelectorAll(".typewriter");
  
  const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.filter = "blur(0px)";
              startTyping(entry.target);
              observer.unobserve(entry.target);
          }
      });
  }, options);
  
  typewriterElements.forEach(element => {
      element.dataset.fullText = element.textContent;
      element.textContent = "";
      observer.observe(element);
  });
  
  function startTyping(element) {
      const words = element.dataset.fullText.split(" ");
      let index = 0;
      
      function type() {
          if (index < words.length) {
              element.textContent += (index === 0 ? "" : " ") + words[index];
              index++;
              setTimeout(type, 10);
          }
      }
      type();
  }
});