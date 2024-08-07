
  document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    var navbarCollapse = document.getElementById('navbarsExample01');

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.getComputedStyle(navbarCollapse).display === 'block') {
          var collapse = new bootstrap.Collapse(navbarCollapse);
          collapse.hide();
        }
      });
    });
  });


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
  //     reset: true
});

sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", {
  delay: 400,
});
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });
