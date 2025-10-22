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
        card.addEventListener('click', function() {
            if (window.innerWidth <= 1024) {
                this.classList.toggle('flipped');
            }
        });
   
        card.addEventListener('mouseleave', function () {
            if (window.innerWidth > 1024) {
                this.classListe.remove('flipped');
            }
        });
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) {
            flipCards.forEach(card => {
                card.addEventList.remove('flipped');
            });
        }
    });
});