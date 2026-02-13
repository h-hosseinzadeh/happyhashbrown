const layers = document.querySelectorAll(".parallax_layer");
let lastScrollY = 0;
const isMobile = window.innerWidth < 900;

window.addEventListener("scroll", () => {
  lastScrollY = window.scrollY;
  requestAnimationFrame(updateParallax);
});

function updateParallax() {
  layers.forEach(layer => {
    let speed = Number(layer.dataset.speed);
    if (isMobile) {
      speed *= 0.5;
    }
    layer.style.transform = `translateY(${-lastScrollY * speed}px)`;
  });
}