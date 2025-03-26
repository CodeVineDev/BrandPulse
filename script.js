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

// Split text into span words with natural spacing
document.querySelectorAll('.text-domino').forEach(element => {
  const words = element.textContent.trim().split(' ');
  element.textContent = '';
  words.forEach((word, index) => {
    const span = document.createElement('span');
    span.classList.add('word');
    span.textContent = word;
    element.appendChild(span);
    if (index < words.length - 1) {
      element.appendChild(document.createTextNode(' ')); // Add actual space text node
    }
  });
});

 // Animate words with typewriter + fade-up
 document.querySelectorAll('.text-domino').forEach(section => {
  const words = section.querySelectorAll('.word');
  gsap.set(words, { opacity: 0, y: 20 });
  ScrollTrigger.create({
    trigger: section,
    start: 'top 80%',
    once: true,
    onEnter: () => {
      gsap.to(words, {
        opacity: 1,
        y: 0,
        stagger: 0.04,    // controls typing speed feel
        duration: 0.1,
        ease: 'expo.out' // cinematic smooth
      });
    }
  });
});

const groups = Array.from(document.querySelectorAll('.fade-up'))
  .reduce((acc, el) => {
    const top = el.offsetTop;
    (acc[top] = acc[top] || []).push(el);
    return acc;
  }, {});

Object.values(groups).forEach(row => {
  gsap.set(row, { opacity: 0, y: 40 });
  ScrollTrigger.create({
    trigger: row[0],
    start: 'top 85%',
    once: true,
    onEnter: () => gsap.to(row, {
      opacity: 1, y: 0, duration: 0.6, stagger: 0.4, ease: 'power4.out'
    })
  });
});
