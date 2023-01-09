function buildFooterStatic(dom){
var html = ' <div class="container">\
<div class="row gy-4">\
  <div class="col-lg-5 col-md-12 footer-info">\
    <a href="index.html" class="logo d-flex align-items-center">\
      <span>My Projects</span>\
    </a>\
    <p>This is my first attempt to use bootstrap to build webpage.<br>\
     you can find three exercises </p>\
    <div class="social-links d-flex mt-4">\
      <a href="https://www.linkedin.com/in/hadeel-ala-2ab3b6ba/" target="_new" class="linkedin"><i class="bi bi-linkedin"></i></a>\
      <a href="https://github.com/hadeelotaifah" target="_new" class="github"><i class="fa fa-github" style="font-size:24px"></i></i></i></a>\
    </div>\
  </div>\
  <div class="col-lg-2 col-6 footer-links">\
    <h4>Useful Links</h4>\
    <ul>\
      <li><a href="#">Home</a></li>\
      <li><a href="#">Contact</a></li>\
    </ul>\
  </div>\
  <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">\
    <h4>Contact</h4>\
    <p>\
      Chicago, IL<br>\
      United States <br><br>\
      <strong>Phone:</strong> +1 630 915 2386<br>\
      <strong>Email:</strong> hadeel.ala@gmail.com<br>\
      <strong>Github:</strong> hadeelotaifah<br>\
    </p>\
  </div>\
</div>\
</div>\
<div class="container mt-4">\
</div>';

dom.innerHTML =  html ;
}

//entry point
buildFooterStatic(document.getElementById('footer'));
//buildMenus(menus, document.getElementById('footer'));
