const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxCaption = document.getElementById('lightbox-caption');

fetch("js/artworks.json")
    .then(res => {
        if (!res.ok) throw new Error("Failed to load artworks.json");
        return res.json();
    })
    .then(artworks => {
        artworks.forEach(art => {
            const img = document.createElement("img");
            img.src = art.src;
            img.alt = art.title;
            img.dataset.title = art.title;
            img.dataset.caption = art.caption;
            img.style.opacity = "0";
            img.onload = () => {
                img.style.transition = "opacity 0.6s ease";
                img.style.opacity = "1";
            };

            img.addEventListener('click', () => {
                lightboxImg.src = art.src;
                lightboxTitle.textContent = art.title;
                lightboxCaption.textContent = art.caption;
                lightbox.classList.add('active');
            });

            gallery.appendChild(img);
        });
    })
    .catch(err => {
        console.error("Error loading artworks:", err);
    });

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
});

document.addEventListener('keydown', e => {
    if (e.key === "Escape") {
        lightbox.classList.remove('active');
    }
});

window.addEventListener("mousemove", e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    document.querySelector(".bg-parallax").style.transform = `translate(${x}px, ${y}px)`;
});