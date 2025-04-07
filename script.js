const e = document.querySelectorAll(".navbar__links a"),
  t = window.location.pathname.split("/").pop();
e.forEach((e) => {
  e.getAttribute("href") === t && e.classList.add("active");
}),
  document.addEventListener("DOMContentLoaded", function () {
    AOS.init({ once: !0 });
    const e = document.querySelector(".slider-track");
    document.querySelectorAll(".slide").forEach((t) => {
      let l = t.cloneNode(!0);
      e.appendChild(l);
    });
    const t = document.querySelector(".testimonial__slider-track");
    document.querySelectorAll(".testimonial__slide").forEach((e) => {
      let l = e.cloneNode(!0);
      t.appendChild(l);
    });
  }),
  gsap.registerPlugin(ScrollTrigger, CustomEase);
document.querySelectorAll(".js-split").forEach((e) => {
  ((e) => {
    const t = e.innerText.split(" "),
      l = t.map(
        (e, l) =>
          `<span class="word-wrapper"><span class="word">${
            l === t.length - 1 ? e : `${e} `
          }</span></span>`
      );
    e.innerHTML = l.join("");
  })(e);
  const t = e.querySelectorAll(".word");
  gsap.set(t, { yPercent: 100, opacity: 0, filter: "blur(10px)" }),
    gsap.to(t, {
      scrollTrigger: {
        trigger: e,
        start: "10% 89%",
        end: "10% 89%",
        toggleActions: "play none none none",
        once: !0,
      },
      yPercent: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.5,
      ease: CustomEase.create(
        "custom",
        "M0,0 C0.402,0 0.238,0.39 0.428,0.7 0.574,0.938 0.818,1.001 1,1 "
      ),
      stagger: { amount: 0.1, ease: "power3.out" },
    });
}),
  document.querySelectorAll(".accordion").forEach((e) => {
    e.addEventListener("click", function () {
      this.classList.toggle("active");
      const e = this.nextElementSibling;
      document.querySelectorAll(".panel").forEach((t) => {
        t !== e &&
          ((t.style.maxHeight = null),
          (t.style.padding = "0 15px"),
          t.previousElementSibling.classList.remove("active"),
          t.previousElementSibling
            .querySelector(".toggle-icon")
            .setAttribute("icon", "ic:baseline-plus"));
      }),
        e.style.maxHeight
          ? ((e.style.maxHeight = null),
            (e.style.padding = "0 15px"),
            this.querySelector(".toggle-icon").setAttribute(
              "icon",
              "ic:baseline-plus"
            ))
          : ((e.style.maxHeight = e.scrollHeight + "px"),
            (e.style.padding = "15px"),
            this.querySelector(".toggle-icon").setAttribute(
              "icon",
              "ic:baseline-minus"
            ));
    });
  });
const l = document.getElementById("hamburger"),
  n = document.getElementById("mobileMenu"),
  o = document.querySelector(".equals"),
  s = document.querySelector(".times");
l.addEventListener("click", () => {
  n.classList.toggle("open");
  const e = n.classList.contains("open");
  (o.style.display = e ? "none" : "block"),
    (s.style.display = e ? "block" : "none");
});
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";
});
