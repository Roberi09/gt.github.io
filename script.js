document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    let current = 0;
    let auto;

    function nextSlide() {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }

   
    auto = setInterval(nextSlide, 4000);

   
    slider.addEventListener('mouseenter', () => clearInterval(auto));
    slider.addEventListener('mouseleave', () => {
        auto = setInterval(nextSlide, 4000);
    });
});