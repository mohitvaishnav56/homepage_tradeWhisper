const corouser = document.getElementById("corouser");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const slide = document.getElementById("slide");


prev.addEventListener("click", () => {
    slide.style.marginLeft = "0%";
    corouser.style.overflow = "hidden";
})

next.addEventListener("click", () => {
    slide.style.marginLeft = "-100%";
    corouser.style.overflow = "hidden";
})


  const testimonials = document.querySelectorAll(".testimonial");
  const prevBtn = document.getElementById("prevRev");
  const nextBtn = document.getElementById("nextRev");
  let currentIndex = 0;

  function showTestimonial(index) {
    testimonials.forEach((t, i) => {
      t.style.display = (i === index) ? "block" : "none";
    });
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
  });

  // Auto resize responsiveness
  window.addEventListener("resize", () => {
    document.getElementById("testimonialWrapper").style.maxWidth =
      window.innerWidth < 768 ? "100%" : "900px";
  });