
setupHeaderFade();

document.querySelectorAll('.thumb-img').forEach(function (img) {
    img.addEventListener('click', function () {
        document.querySelectorAll('.thumb-img').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
        document.getElementById('mainProductImg').src = this.src.replace('w=200', 'w=600');
    });
});


document.querySelectorAll('.desc-productdetail__category p').forEach(function (tab) {
    tab.addEventListener('click', function () {

        document.querySelectorAll('.desc-productdetail__category p').forEach(p => p.classList.remove('active'));
        this.classList.add('active');

        document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
        document.getElementById(this.getAttribute('data-tab')).classList.add('active');
    });
});

setupIntersectionReveal('.fade-in-up', 'show', 0.2);

