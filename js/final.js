document.addEventListener('DOMContentLoaded',() => {
    const slides = document.querySelectorAll('.slider__slide');
    const prevBtn = document.querySelector('.slider__prev');
    const nextBtn = document.querySelector('.slider__next');
    let currentSlide = 0;

    const showSlide = (index) => {
        slides.forEach((slides,i) => {
            slides.classList.toggle('active', i === index);
        });
    };

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide)
    };
    const prevSlide = () => {
        currentSlide = (currentSlide - 1 + slides.length) %
        slides.length;
        showSlide(currentSlide);
    };
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    showSlide(currentSlide);
    
});