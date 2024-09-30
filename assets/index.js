const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
const slideWidth = 100; // Assuming each slide takes 100% width
let currentIndex = 0;
let slideInterval;

function goToSlide(index) {
slides.style.transition = 'transform 0.5s ease';
slides.style.transform = `translateX(-${index * slideWidth}%)`;
currentIndex = index;

// When reaching the cloned slides, jump back to the start
if (index >= slideCount / 2) {
    setTimeout(() => {
        slides.style.transition = 'none';
        slides.style.transform = 'translateX(0)';
        currentIndex = 0;
    }, 500); // Match this delay to the transition time
}
}

function nextSlide() {
goToSlide(currentIndex + 1);
}

function prevSlide() {
if (currentIndex > 0) {
    goToSlide(currentIndex - 1);
} else {
    slides.style.transition = 'none';
    slides.style.transform = `translateX(-${(slideCount / 2 - 1) * slideWidth}%)`;
    currentIndex = slideCount / 2 - 1;
    setTimeout(() => {
        slides.style.transition = 'transform 0.5s ease';
        goToSlide(currentIndex - 1);
    }, 0);
}
}

function startSlideShow() {
slideInterval = setInterval(nextSlide, 3000); // Change slides every 3 seconds
}

function stopSlideShow() {
clearInterval(slideInterval);
}

document.querySelector('.next').addEventListener('click', () => {
nextSlide();
stopSlideShow();
startSlideShow();
});

document.querySelector('.prev').addEventListener('click', () => {
prevSlide();
stopSlideShow();
startSlideShow();
});

startSlideShow();
