const items = document.querySelectorAll('.creative-item img');
const lightbox = document.getElementById('lightbox');
const lbImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');

// Open lightbox on click
items.forEach(img => {
  img.addEventListener('click', () => {
    lbImg.src = img.src;
    lightbox.classList.remove('hidden');
  });
});

// Close on X or outside click
closeBtn.addEventListener('click', () => lightbox.classList.add('hidden'));
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) lightbox.classList.add('hidden');
});
