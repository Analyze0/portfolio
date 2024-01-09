let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { 
    slideIndex = 1 
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); 
}

document.querySelector('.one').onclick = function(e){
  window.location.href = "https://discrod.quinnrhancock.repl.co";
}

document.querySelector('.two').onclick = function(e){
  window.location.href = "https://popcat.quinnrhancock.repl.co/";
}
document.querySelector('.three').onclick = function(e){
  window.location.href = "https://planner.quinnrhancock.repl.co/";
}
