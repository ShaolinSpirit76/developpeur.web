// Gestion des ancres grâce à un évènement sur le refresh/chargement de la page

  // Page d'accueil
document.addEventListener("DOMContentLoaded", function(event) { 
  $('html, body').animate({
    scrollTop: $("#HomeAnchor").offset().top
  }, 2000);
});



// Scroll to top
AOS.init();

var btn = $('.buttonScroll');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, 2000);
});


// Gestion des ancres

// Certif-OC Page
$(document).ready(function() {
  $(".Python1").click(function() {
    $('html, body').animate({
      scrollTop: $("#Python1").offset().top
    }, 2000);
  });
});
$(document).ready(function() {
  $(".Windows10").click(function() {
    $('html, body').animate({
      scrollTop: $("#Windows10").offset().top
    }, 2000);
  });
});


$(document).ready(function() {
  $(".clickproScol").click(function() {
    $('html, body').animate({
      scrollTop: $("#competences").offset().top
    }, 2000);
  });
});
$(document).ready(function() {
  $(".clickInfo").click(function() {
    $('html, body').animate({
      scrollTop: $("#experience").offset().top
    }, 2000);
  });
});
$(document).ready(function() {
  $(".clickAutre").click(function() {
    $('html, body').animate({
      scrollTop: $("#Autre").offset().top
    }, 2000);
  });
});
$(document).ready(function() {
  $(".clickEnseignement").click(function() {
    $('html, body').animate({
      scrollTop: $("#Enseignement").offset().top
    }, 2000);
  });
});

$(document).ready(function() {
  $(".clickTop1").click(function() {
    $('html, body').animate({
      scrollTop: $("#menu1").offset().top
    }, 2000);
  });
});
$(document).ready(function() {
  $(".clickContact").click(function() {
    $('html, body').animate({
      scrollTop: $("#image7").offset().top
    }, 2000);
  });
});







// Div cachées à l'ouverture de competences.html
$(".clickproScol").click(function() {
$("#certifOC").hide();
$("#competences").show();
});

  // Choix des compétences
    // 1 : Développées en formation
    $(".clickproScol").click(function() {
      $("#competences").show();
      $("#certifOC").hide();
    });

      // 2 : Développées par OC
      $(".clickOC").click(function() {
        $("#competences").hide();
        $("#certifOC").show();
      });










// Retour à l'accueil : afficher comme à l'ouverture de la page

// $(".home").click(function() {
//   $("#head").show();
//   $("#experience").hide();
//   $("#diplomes").hide();
//   $("#creations").hide();
//   $("#ParcoursScolaire").hide();
//   $("#loisirs").hide();
// });


// Afficher les compétences

// $(".OC").click(function() {
//   $("#head").hide();
//   $("#experience").hide();
//   $("#diplomes").hide();
//   $("#ParcoursScolaire").hide();
//   $("#creations").hide();
//   $("#loisirs").hide();
// });

// Afficher les compétences

// $(".cpt").click(function() {
//   $("#head").hide();
//   $("#certifOC").hide();
//   $("#experience").hide();
//   $("#diplomes").hide();
//   $("#ParcoursScolaire").hide();
//   $("#creations").hide();
//   $("#loisirs").hide();
//   $("#competences").show();
// });

// Afficher l'expérience

// $(".exp").click(function() {
//   $("#head").hide();
//   $("#certifOC").hide();
//   $("#diplomes").hide();
//   $("#ParcoursScolaire").hide();
//   $("#creations").hide();
//   $("#loisirs").hide();
//   $("#experience").show();
// });

// Afficher l'expérience dans l'informatique
// $(".informatique").click(function() {
//   $("#head").hide();
//   $("#certifOC").hide();
//   $("#diplomes").hide();
//   $("#ParcoursScolaire").hide();
//   $("#creations").hide();
//   $("#loisirs").hide();
//   $("#experience").show();
// });

// Afficher l'expérience Autre
// $(".autre").click(function() {
//   $("#head").hide();
//   $("#certifOC").hide();
//   $("#diplomes").hide();
//   $("#ParcoursScolaire").hide();
//   $("#creations").hide();
//   $("#loisirs").hide();
//   $("#experience").show();
// });

// Afficher l'expérience dans l'enseignement
// $(".enseignement").click(function() {
//   $("#head").hide();
//   $("#certifOC").hide();
//   $("#diplomes").hide();
//   $("#ParcoursScolaire").hide();
//   $("#creations").hide();
//   $("#loisirs").hide();
//   $("#experience").show();
// });

// Afficher les Diplômes
// $(".dpl").click(function() {
//   $("#head").hide();
//   $("#certifOC").hide();
//   $("#experience").hide();
//   $("#ParcoursScolaire").hide();
//   $("#creations").hide();
//   $("#loisirs").hide();
//   $("#diplomes").show();
// });

// Afficher le parcours scolaire
// $(".pscol").click(function() {
//   $("#head").hide();
//   $("#certifOC").hide();
//   $("#experience").hide();
//   $("#diplomes").hide();
//   $("#creations").hide();
//   $("#loisirs").hide();
//   $("#ParcoursScolaire").show();
// });

// Afficher les créations
// $(".crt").click(function() {
//   $("#head").hide();
//   $("#certifOC").hide();
//   $("#experience").hide();
//   $("#diplomes").hide();
//   $("#ParcoursScolaire").hide();
//   $("#loisirs").hide();
//   $("#creations").show();
// });

// Afficher les loisirs
// $(".lsr").click(function() {
//   $("#head").hide();
//   $("#certifOC").hide();
//   $("#experience").hide();
//   $("#diplomes").hide();
//   $("#ParcoursScolaire").hide();
//   $("#creations").hide();
//   $("#loisirs").show();
// });
