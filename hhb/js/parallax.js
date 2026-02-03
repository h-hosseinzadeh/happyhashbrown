const layers = document.querySelectorAll(".parallax_layer");
let lastScrollY = 0;

window.addEventListener("scroll", () => {
  lastScrollY = window.scrollY;
  requestAnimationFrame(updateParallax);
});

function updateParallax() {
  layers.forEach(layer => {
    const speed = Number(layer.dataset.speed);
    layer.style.transform = `translateY(${-lastScrollY * speed}px)`;
  });
}