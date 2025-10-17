document.addEventListener('DOMContentLoaded', function() {
    // Código do Slider
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    let current = 0;
    let auto;

    function nextSlide() {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }

    // Inicia o slider
    auto = setInterval(nextSlide, 4000);

    // Pausa no hover
    slider.addEventListener('mouseenter', () => clearInterval(auto));
    slider.addEventListener('mouseleave', () => {
        auto = setInterval(nextSlide, 4000);
    });

    // Código do Menu Mobile (AGORA DENTRO DO DOMContentLoaded)
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            const isExpanded = nav.classList.contains('active');
            this.classList.toggle('active', isExpanded);
            this.setAttribute('aria-expanded', String(isExpanded));
        });

        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
}); // ← AQUI FECHA CORRETAMENTE O DOMContentLoaded