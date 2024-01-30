let viewportWidth = window.innerWidth;
let e = 1 / (viewportWidth / 5);

setInterval(function() {
  e--;
  document.getElementById('crawl').style.marginTop = ""+e+"px";
}, 15);

window.onload = function() {
  setTimeout(function() {
    window.scrollTo(0, 0);
  }, 1);
};

document.getElementById('back').onmousedown = function(e){
  window.location.href = "/portfolio/index.html";
}
