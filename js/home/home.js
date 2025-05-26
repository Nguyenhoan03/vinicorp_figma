
const backToTopBtn = document.getElementById('backToTopBtn');
function toggleBackToTop() {
    if (window.innerWidth < 992 && window.scrollY > 200) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
}
window.addEventListener('scroll', toggleBackToTop);
window.addEventListener('resize', toggleBackToTop);

backToTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});



const swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 300000000,
        disableOnInteraction: false,
    },
    breakpoints: {
        1200: {
            slidesPerView: 4
        },
        992: {
            slidesPerView: 3
        },
        765: {
            slidesPerView: 2
        },
        350: {
            slidesPerView: 2
        },

        0: {
            slidesPerView: 1
        }
    }
});




document.querySelectorAll('.discount-item__tab').forEach(tab => {
    tab.addEventListener('click', function () {
        document.querySelectorAll('.discount-item__tab').forEach(t => t.classList.remove('discount-item__tab--active'));
        this.classList.add('discount-item__tab--active');
    });
});




setupIntersectionReveal('.reveal', 'active', 0.15);







document.querySelectorAll('.leatest-tab').forEach(tab => {
    tab.addEventListener('click', function () {
        document.querySelectorAll('.leatest-tab').forEach(t => t.classList.remove('leatest-tab--active'));
        this.classList.add('leatest-tab--active');
    });
});


setupHeaderFade();




document.querySelectorAll('.leatest-tab').forEach(tab => {
    tab.addEventListener('click', function () {

        document.querySelectorAll('.leatest-tab').forEach(t => t.classList.remove('leatest-tab--active'));
        this.classList.add('leatest-tab--active');

        const tabName = this.getAttribute('data-tab');
        document.querySelectorAll('.leatest-tab-pane').forEach(pane => pane.classList.remove('active'));
        document.getElementById('tab-' + tabName).classList.add('active');
    });
});




document.querySelectorAll('.discount-item__tab').forEach(tab => {
    tab.addEventListener('click', function () {
        document.querySelectorAll('.discount-item__tab').forEach(t => t.classList.remove('discount-item__tab--active'));
        this.classList.add('discount-item__tab--active');
        const tabName = this.getAttribute('data-tab');
        document.querySelectorAll('.discount-item__content').forEach(c => c.classList.remove('discount-item__content--active'));
        document.getElementById('discount-tab-' + tabName).classList.add('discount-item__content--active');
    });
});
