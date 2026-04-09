// Build the gallery — two shuffled pools of all 50 pieces, one after the other.
const gallery = document.getElementById('gallery');
const THUMB_WIDTHS = [400, 800, 1600];

function thumbUrl(file, width) {
    const stem = file.replace(/\.[^.]+$/, '');
    return `images/thumbs/${encodeURIComponent(`${stem}-${width}.webp`)}`;
}

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
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

// Pool 1 then Pool 2 — each is a full shuffled set of all pieces.
shuffle(ART).concat(shuffle(ART)).forEach(piece => {
    gallery.appendChild(makeTile(piece));
});

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
