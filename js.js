var index = 1;
showAll(index);

function slide(n) {
  showAll(index += n);
}

function currentSlide(n) {
  showAll(index = n);
}

function showAll(n) {
  var i;
  var slides = document.getElementsByClassName("bigSlides");
  var actives = document.getElementsByClassName("highlight");
  var text = document.getElementById("caption");
  if (n > slides.length) 
  {
      index = 1
  }
  if (n < 1) 
  {
      index = slides.length
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < actives.length; i++) {
      actives[i].className = actives[i].className.replace(" active", "");
  }
  slides[index-1].style.display = "block";
  actives[index-1].className += " active";
  text.innerHTML = actives[index-1].alt;
}