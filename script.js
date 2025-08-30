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