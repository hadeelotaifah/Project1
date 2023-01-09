
function buildMenusStatic(dom){
    var html ='<div class="container-fluid container-xl d-flex align-items-center justify-content-between">\
    <a href="index.html" class="logo d-flex align-items-center">\
      <!-- Uncomment the line below if you also wish to use an image logo -->\
      <!-- <img src="assets/img/logo.png" alt=""> -->\
      <h1>My Project</h1>\
    </a>\
    <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>\
    <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>\
    <nav id="navbar" class="navbar">\
      <ul>\
        <li><a href="index.html" class="active">Home</a></li>\
        <li class="dropdown"><a href="projects.html"><span>Projects</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>\
          <ul>\
            <li><a href="project1.html">PacMen Exercise</a></li>\
            <li><a href="project2.html">Eye Exercise</a></li>\
            <li><a href="project3.html">Real Time Bus Tracking Exercise</a></li>\
          </ul>\
        </li>\
        <li><a href="contact.html">Contact</a></li>\
      </ul>\
    </nav>\
  </div>';

    dom.innerHTML =  html ;
}

//dynamic
function buildMenus(itms, dom){

}

//entry point
buildMenusStatic(document.getElementById('header'));
//buildMenus(menus, document.getElementById('header'));