<<<<<<< HEAD
// ── Animação Hero ──
document.addEventListener('DOMContentLoaded', function() {
    const foto  = document.getElementById('hero-foto');
    const texto = document.getElementById('hero-texto');
    if (!foto || !texto) return;

    function animar() {
        foto.classList.remove('hero-saiu');
        texto.classList.remove('hero-saiu');
        void foto.offsetWidth;
        foto.classList.add('hero-visivel');
        texto.classList.add('hero-visivel');
    }

    function resetar() {
        foto.classList.remove('hero-visivel');
        texto.classList.remove('hero-visivel');
        foto.classList.add('hero-saiu');
        texto.classList.add('hero-saiu');
    }

    setTimeout(animar, 200);

    const hero = document.querySelector('.hero-section');
    if (hero && 'IntersectionObserver' in window) {
        new IntersectionObserver(function(entries) {
            entries.forEach(e => e.isIntersecting ? animar() : resetar());
        }, { threshold: 0.2 }).observe(hero);
    }
});

// ── Animação Seção Apresentação ──
document.addEventListener('DOMContentLoaded', function() {
    const aboutFoto  = document.getElementById('about-foto');
    const aboutTexto = document.getElementById('about-texto');
    if (!aboutFoto || !aboutTexto) return;

    function animarAbout() {
        aboutFoto.classList.remove('about-saiu');
        aboutTexto.classList.remove('about-saiu');
        void aboutFoto.offsetWidth;
        aboutFoto.classList.add('about-visivel');
        aboutTexto.classList.add('about-visivel');
    }

    function resetarAbout() {
        aboutFoto.classList.remove('about-visivel');
        aboutTexto.classList.remove('about-visivel');
        aboutFoto.classList.add('about-saiu');
        aboutTexto.classList.add('about-saiu');
    }

    const section = document.getElementById('about');
    if (section && 'IntersectionObserver' in window) {
        new IntersectionObserver(function(entries) {
            entries.forEach(e => e.isIntersecting ? animarAbout() : resetarAbout());
        }, { threshold: 0.15 }).observe(section);
    }
=======
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

// Carrossel mobile (substituir a seção antiga por esta)
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.mobile-carousel');
    if (!carousel) return;
    
    const track = carousel.querySelector('.carousel-track');
    const wrapper = carousel.querySelector('.carousel-wrapper');
    const cards = Array.from(carousel.querySelectorAll('.carousel-card'));
    const dots = carousel.querySelectorAll('.dot');
    
    let currentIndex = 0;
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    let dragThreshold = 50;

    function updateCarousel() {
        const cardWidth = cards[0].offsetWidth;
        const offset = -currentIndex * cardWidth;
        track.style.transform = `translateX(${offset}px)`;
        
        cards.forEach((card, index) => {
            card.classList.toggle('active', index === currentIndex);
        });
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function goToSlide(index) {
        if (index >= 0 && index < cards.length) {
            currentIndex = index;
            updateCarousel();
        }
    }

    function nextSlide() {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    }

    wrapper.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].clientX;
        currentX = startX;
        track.style.transition = 'none';
    });

    wrapper.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        
        e.preventDefault();
        currentX = e.touches[0].clientX;
        const diff = currentX - startX;
        
        const cardWidth = cards[0].offsetWidth;
        const dragOffset = -currentIndex * cardWidth + diff * 0.5;
        track.style.transform = `translateX(${dragOffset}px)`;
    });

    wrapper.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        
        isDragging = false;
        track.style.transition = 'transform 0.3s ease';
        
        const diff = currentX - startX;
     
        if (Math.abs(diff) > dragThreshold) {
            if (diff > 0) {
                prevSlide();
            } else {
                nextSlide();
            }
        } else {
            updateCarousel();
        }
    });

    wrapper.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        currentX = startX;
        track.style.transition = 'none';
        e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        currentX = e.clientX;
        const diff = currentX - startX;
        
        const cardWidth = cards[0].offsetWidth;
        const dragOffset = -currentIndex * cardWidth + diff * 0.5;
        track.style.transform = `translateX(${dragOffset}px)`;
    });

    document.addEventListener('mouseup', (e) => {
        if (!isDragging) return;
        
        isDragging = false;
        track.style.transition = 'transform 0.3s ease';
        
        const diff = currentX - startX;
        
        if (Math.abs(diff) > dragThreshold) {
            if (diff > 0) {
                prevSlide();
            } else {
                nextSlide();
            }
        } else {
            updateCarousel();
        }
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
    });

    updateCarousel();

    window.addEventListener('resize', updateCarousel);
>>>>>>> b5d0702f7cefc957f94122ce111056204d09ab6b
});