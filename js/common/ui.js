// Header fade on scroll
function setupHeaderFade() {
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('header-fade');
        } else {
            header.classList.remove('header-fade');
        }
    });
}

// Reveal animation on scroll
function setupIntersectionReveal(selector, classToAdd = 'active', threshold = 0.15) {
    const elements = document.querySelectorAll(selector);
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(classToAdd);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold });
    elements.forEach(el => observer.observe(el));
}