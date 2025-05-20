let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

setInterval(function() {
  plusSlides(1);
}, 3000);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (slides.length === 0) return;
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
    slides[i].style.zIndex = 0;
    slides[i].style.pointerEvents = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.opacity = 1;
  slides[slideIndex-1].style.zIndex = 1;
  slides[slideIndex-1].style.pointerEvents = "auto";
  if (dots[slideIndex-1]) dots[slideIndex-1].className += " active";
}
