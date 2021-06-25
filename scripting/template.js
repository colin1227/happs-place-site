const prev = document.getElementsByClassName('prev')[0];
const next = document.getElementsByClassName('next')[0];

// kill old shit

if (window.innerWidth >= 600) {
  // big screen
  prev.addEventListener("click", () => plusSlides(-1));
  next.addEventListener("click", () => plusSlides(1));

} else {
  // small screen
  prev.addEventListener("touchstart", () => plusSlides(-1));
  next.addEventListener("touchstart", () => plusSlides(1));

}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block"; 
}
