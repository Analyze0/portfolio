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
    if (project != "nit") {
      document.querySelector('.description').style.top = "100%";
      setTimeout(function() {
        document.querySelector('.description').innerHTML = `
        <h1>NIT (Nebraskan Institute of Thermometers)</h1>
        <center>
        <p>This is a fun little project that I made with a couple friends where we basically just ripped off the MIT website (no copy and paste) and added some funny skits and stuff to it.</p><br>
        <a src="https://analyze0.github.io/NIT/">Link</a>
        </center>
        `;
        document.querySelector('.description').style.top = "5px";
      }, 1000);
    }
    project = "nit";
    projectTitle.innerHTML = "NIT (Nebraskan Institute of Thermometers)";
    document.getElementById('tv').src = "images/nit.png";
  }
  else if (scrollVal > 200 && scrollVal <= 300) {
    if (project != "worldwideStudent") {
      document.querySelector('.description').style.top = "100%";
      setTimeout(function() {
        document.querySelector('.description').innerHTML = `
        <h1>Worldwide Student</h1>
        <center>
      <p>I've recently started working on this game project. It's going to be really exciting!</p><br>
      <a src="worldwide-student.vercel.app">Link</a>
      </center>
        `;
        document.querySelector('.description').style.top = "5px";
      }, 1000);
    }
    project = "worldwideStudent";
    projectTitle.innerHTML = "Worldwide Student";
    document.getElementById('tv').src = "images/worldwideStudent.png";
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
