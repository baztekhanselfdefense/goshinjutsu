// JavaScript for Baztekhan Martial Arts Website

// Set current year in footer
document.getElementById('year').innerText = new Date().getFullYear();

// Navbar scroll behavior
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 80) {
        navbar.classList.add('nav-scrolled');
    } else {
        navbar.classList.remove('nav-scrolled');
    }
});

// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
function toggleMenu() {
    mobileMenu.classList.toggle('translate-x-full');
    document.body.classList.toggle('overflow-hidden');
}
document.getElementById('menu-btn').addEventListener('click', toggleMenu);

// FAQ accordion toggle
function toggleFaq(btn) {
    const content = btn.nextElementSibling;
    const icon = btn.querySelector('svg');
    content.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
}

// Image carousel functionality
let currentSlide = 0;
const totalSlides = 10;
let carouselInterval;

function showSlide(index) {
    // Hide all slides
    for (let i = 0; i < totalSlides; i++) {
        const slide = document.getElementById(`carousel-img-${i + 1}`);
        const indicator = document.getElementById(`carousel-indicator-${i}`);
        if (slide) slide.classList.add('hidden');
        if (indicator) indicator.classList.remove('bg-white');
        if (indicator) indicator.classList.add('bg-white/30');
    }
    
    // Show current slide
    const currentImg = document.getElementById(`carousel-img-${index + 1}`);
    const currentIndicator = document.getElementById(`carousel-indicator-${index}`);
    if (currentImg) {
        currentImg.classList.remove('hidden');
        currentImg.classList.add('carousel-item');
    }
    if (currentIndicator) {
        currentIndicator.classList.remove('bg-white/30');
        currentIndicator.classList.add('bg-white');
    }
}

function changeCarouselImage(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    showSlide(currentSlide);
    resetCarouselInterval();
}

function goToCarouselImage(index) {
    currentSlide = index;
    showSlide(currentSlide);
    resetCarouselInterval();
}

function resetCarouselInterval() {
    clearInterval(carouselInterval);
    carouselInterval = setInterval(() => {
        changeCarouselImage(1);
    }, 4000);
}

// Initialize carousel
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    carouselInterval = setInterval(() => {
        changeCarouselImage(1);
    }, 4000);
});
