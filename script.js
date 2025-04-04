const links = document.querySelectorAll(".navbar__links a");
const currentPage = window.location.pathname.split("/").pop(); // this gets just the filename

links.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
      once: true,  // Animations will only happen once
    });
  
  const sliderTrack = document.querySelector(".slider-track");
  const slides = document.querySelectorAll(".slide");

  // Duplicate slides for seamless effect
  slides.forEach((slide) => {
    let clone = slide.cloneNode(true);
    sliderTrack.appendChild(clone);
  });
  const tstmSliderTrack = document.querySelector(".testimonial__slider-track");
  const tstmSlides = document.querySelectorAll(".testimonial__slide");

  // Duplicate slides for seamless effect
  tstmSlides.forEach((slide) => {
    let clone = slide.cloneNode(true);
    tstmSliderTrack.appendChild(clone);
  });
});

gsap.registerPlugin(ScrollTrigger, CustomEase);

const CUSTOM_EASE = "M0,0 C0.402,0 0.238,0.39 0.428,0.7 0.574,0.938 0.818,1.001 1,1 ";

const splitIntoWords = (el) => {
  const strArray = el.innerText.split(" ");
  const words = strArray.map((word, i) => {
    return `<span class="word-wrapper"><span class="word">${i === strArray.length - 1 ? word : `${word} `}</span></span>`;
  });

  el.innerHTML = words.join("");
};

const textElements = document.querySelectorAll(".js-split");

textElements.forEach((el) => {
  splitIntoWords(el);

  const words = el.querySelectorAll(".word");

  gsap.set(words, { 
    yPercent: 100, 
    opacity: 0, 
    filter: "blur(10px)" 
  });

  gsap.to(words, {
    scrollTrigger: {
      trigger: el,
      start: "10% 89%",
      end: "10% 89%",
      toggleActions: "play none none none",
      once: true,
    },
    yPercent: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 0.5,
    ease: CustomEase.create("custom", CUSTOM_EASE),
    stagger: {
      amount: 0.1,
      ease: "power3.out",
    },
  });
});

document.querySelectorAll(".accordion").forEach((accordion) => {
  accordion.addEventListener("click", function () {
    // Toggle active class
    this.classList.toggle("active");

    // Get the next panel
    const panel = this.nextElementSibling;

    // Close other open panels
    document.querySelectorAll(".panel").forEach((p) => {
      if (p !== panel) {
        p.style.maxHeight = null;
        p.style.padding = "0 15px";
        p.previousElementSibling.classList.remove("active");
        p.previousElementSibling
          .querySelector(".toggle-icon")
          .setAttribute("icon", "ic:baseline-plus");
      }
    });

    // Toggle current panel
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.padding = "0 15px";
      this.querySelector(".toggle-icon").setAttribute(
        "icon",
        "ic:baseline-plus"
      );
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.padding = "15px";
      this.querySelector(".toggle-icon").setAttribute(
        "icon",
        "ic:baseline-minus"
      );
    }
  });
});
