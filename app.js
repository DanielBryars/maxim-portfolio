// Build the gallery — duplicates the catalogue a few times for an "infinite" feel.
const gallery = document.getElementById('gallery');
const REPEATS = 4;
const THUMB_WIDTHS = [400, 800, 1600];

// Strip the original extension and return the WebP thumbnail path for a given width.
function thumbUrl(file, width) {
    const stem = file.replace(/\.[^.]+$/, '');
    return `images/thumbs/${encodeURIComponent(`${stem}-${width}.webp`)}`;
}

function makeTile(piece) {
    const tile = document.createElement('div');
    tile.className = 'tile';
    const srcset = THUMB_WIDTHS.map(w => `${thumbUrl(piece.file, w)} ${w}w`).join(', ');
    const sizes = '(max-width: 600px) 100vw, (max-width: 900px) 50vw, (max-width: 1400px) 33vw, 25vw';
    tile.innerHTML = `
        <img src="${thumbUrl(piece.file, 800)}"
             srcset="${srcset}"
             sizes="${sizes}"
             alt="${piece.title}"
             loading="lazy"
             decoding="async">
        <div class="tile-title">${piece.title}</div>
    `;
    tile.addEventListener('click', () => openModal(piece));
    return tile;
}

for (let i = 0; i < REPEATS; i++) {
    // Shuffle a copy each pass so repeats don't look like obvious tiling
    const shuffled = [...ART].sort(() => Math.random() - 0.5);
    shuffled.forEach(piece => gallery.appendChild(makeTile(piece)));
}

// Modal handling
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDetails = document.getElementById('modal-details');
const modalDescription = document.getElementById('modal-description');
const modalClose = document.getElementById('modal-close');
const modalBackdrop = document.querySelector('.modal-backdrop');

function openModal(piece) {
    modalImage.src = `images/${encodeURIComponent(piece.file)}`;
    modalImage.alt = piece.title;
    modalTitle.textContent = piece.title;

    const fields = [
        ['Date', piece.date],
        ['Software', piece.software],
        ['Hardware', piece.hardware]
    ];
    modalDetails.innerHTML = fields
        .map(([label, value]) => `
            <dt>${label}</dt>
            <dd>${value || '<span style="color:#555;font-style:italic;">Coming soon...</span>'}</dd>
        `).join('');

    modalDescription.textContent = piece.description || '';
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});
