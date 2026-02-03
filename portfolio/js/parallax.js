const layers = document.querySelectorAll(".parallax_layer");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  layers.forEach(layer => {
    const speed = layer.dataset.speed;
    layer.style.transform = `translateY(${-scrollY * speed}px)`;
  });
});
