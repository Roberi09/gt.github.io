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

document.addEventListener('DOMContentLoaded', function() {
    const flipCards = document.querySelectorAll('.flip-card');
    
    flipCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (window.innerWidth <= 1024) {
                e.preventDefault();
                e.stopPropagation();
                
                flipCards.forEach(otherCard => {
                    if (otherCard !== this) {
                        otherCard.classList.remove('flipped');
                    }
                });
                
                this.classList.toggle('flipped');
                
                if (this.classList.contains('flipped')) {
                    setTimeout(() => {
                        this.classList.remove('flipped');
                    }, 4000);
                }
            }
        });
    });
    
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) {
            flipCards.forEach(card => {
                card.classList.remove('flipped');
            });
        }
    });
});