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
});

// ── Formulário → WhatsApp ──
function enviarWhatsApp(e) {
    e.preventDefault();
 
    const nome     = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const email    = document.getElementById('mail').value.trim();
    const mensagem = document.getElementById('message').value.trim();
 
    const texto = `Olá, Gisele! Vim pelo site e gostaria de uma consulta.%0A%0A`
        + `*Nome:* ${nome}%0A`
        + `*Telefone:* ${telefone}%0A`
        + (email ? `*Email:* ${email}%0A` : '')
        + `%0A*Caso:*%0A${mensagem}`;
 
    window.open(`https://wa.me/5582991574846?text=${texto}`, '_blank');
}