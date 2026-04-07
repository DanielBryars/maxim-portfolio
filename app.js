// Build the gallery — duplicates the catalogue a few times for an "infinite" feel.
const gallery = document.getElementById('gallery');
const REPEATS = 4;

function makeTile(piece) {
    const tile = document.createElement('div');
    tile.className = 'tile';
    tile.innerHTML = `
        <img src="images/${encodeURIComponent(piece.file)}" alt="${piece.title}" loading="lazy">
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
        ['Hardware', piece.hardware],
        ['Source / Reference', piece.source]
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
