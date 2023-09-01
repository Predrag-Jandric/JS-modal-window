'use strict';

// Taking reference points
const modal = document.getElementById('normalModal');
const overlay = document.getElementById('overlay');
const btnCloseModal = document.getElementById('closeNormalModal');
const btnOpenModal = document.getElementById('showNormalModal');

// OPEN modal
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
btnOpenModal.addEventListener('click', openModal);


// CLOSE modal 
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
// Close modal pressing "esc" key
document.addEventListener('keydown', (event) => event.key === 'Escape' ? closeModal() : null);


