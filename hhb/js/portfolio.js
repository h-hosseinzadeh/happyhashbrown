const gallery = document.getElementById('.gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxCaption = document.getElementById('lightbox-caption');

fetch("artworks.json")
    .then(res => res.json())
    .then(artworks => {
        artworks.forEach(art => {
            const img = document.createElement("img");
            img.src = art.src;
            img.alt = art.title;
            img.dataset.title = art.title;
            img.dataset.caption = art.caption;

            img.addEventListener('click', () => {
                lightboxImg.src = art.src;
                lightboxTitle.textContent = art.title;
                lightboxCaption.textContent = art.caption;
                lightbox.classList.add('active');
            });

            gallery.appendChild(img);
        });
    });

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
});

// document.querySelectorAll(".masonry img").forEach(img => {
//     img.addEventListener('click', () => {
//         lightboxImg.src = img.src;
//         lightbox.classList.add('active');
//     })
// })

// lightbox.addEventListener('click', () => {
//     lightbox.classList.remove('active');
//     lightboxImg.src = '';
// })