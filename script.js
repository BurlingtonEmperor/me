const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const totalCards = cards.length;
const theta = 360 / totalCards; 

const cardWidth = 300; 
const radius = Math.round((cardWidth / 2) / Math.tan(Math.PI / totalCards));

let currentIndex = 0;

cards.forEach((card, index) => {
  const cardAngle = theta * index;
  card.style.transform = `rotateY(${cardAngle}deg) translateZ(${radius}px)`;
});

function rotateCarousel() {
  const angle = theta * currentIndex * -1;
  carousel.style.transform = `translateZ(-${radius}px) rotateY(${angle}deg)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex--;
  rotateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex++;
  rotateCarousel();
});