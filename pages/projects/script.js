var project;

window.onscroll = function(e) {
  document.querySelector('.scroll').style.opacity = "0%";
  let scrollVal = window.scrollY;

  const projectTitle = document.getElementById('project-title');

  if (scrollVal > 400) {
    if (project != "ruler") {
      document.querySelector('.description').style.top = "100%";
      setTimeout(function() {
        document.querySelector('.description').innerHTML = `
        <h1>Ruler</h1>
        <center>
        <p>I created this in art class because I realized that I didn't have a ruler. It accurately resizes to function as a perfect ruler on Android and Chromebook.</p>
        </center>
        `;
        document.querySelector('.description').style.top = "5px";
      }, 1000);
    }
    project = "ruler";
    projectTitle.innerHTML = "Ruler";
    document.getElementById('tv').src = "images/ruler.png";
  }
  else if (scrollVal > 300 && scrollVal <= 400) {
    if (project != "popcatCookieClicker") {
      document.querySelector('.description').style.top = "100%";
      setTimeout(function() {
        document.querySelector('.description').innerHTML = `
        <h1>Popcat + Cookie Clicker</h1>
        <center>
        <p>This is a game that I developed a while back. It is basically the popcat website, except it is also like cookie clicker, where you can buy upgrades. Sadly, I stopped working on this project a while ago.</p>
        </center>
        `;
        document.querySelector('.description').style.top = "5px";
      }, 1000);
    }
    project = "popcatCookieClicker";
    projectTitle.innerHTML = "Popcat + Cookie Clicker";
    document.getElementById('tv').src = "images/popcat.png";
  }
  else if (scrollVal > 200 && scrollVal <= 300) {
    if (project != "gameProject") {
      document.querySelector('.description').style.top = "100%";
      setTimeout(function() {
        document.querySelector('.description').innerHTML = `
        <h1>Game Project</h1>
        <center>
      <p>I've recently started working on this game project. It's going to be really exciting!</p>
      </center>
        `;
        document.querySelector('.description').style.top = "5px";
      }, 1000);
    }
    project = "gameProject";
    projectTitle.innerHTML = "Game Project";
    document.getElementById('tv').src = "images/gameProject.png";
  }
  else if (scrollVal > 500) {
    if (project != "futureProject") {
      document.querySelector('.description').style.top = "100%";
      setTimeout(function() {
        document.querySelector('.description').innerHTML = `
        <h1>Future Project</h1>
        <center>
      <p>My upcoming project will be revealed soon. Stay tuned!</p>
      </center>
        `;
        document.querySelector('.description').style.top = "5px";
      }, 1000);
    }
    project = "futureProject";
    projectTitle.innerHTML = "Future Project";
    document.getElementById('tv').src = "images/futureProject.png";
  }

  //console.clear();console.log(scrollVal);
}

document.getElementById('back').onmousedown = function(e) {
  window.location.href = "/portfolio/index.html";
}
