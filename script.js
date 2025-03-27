const links = document.querySelectorAll('.navbar__links a');
const currentPage = window.location.pathname.split("/").pop(); // this gets just the filename

links.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

const slider = document.getElementById('homeSlider');
const sliderContent = slider.innerHTML;
slider.innerHTML = `<div class="slider-track">${sliderContent + sliderContent}</div>`;

