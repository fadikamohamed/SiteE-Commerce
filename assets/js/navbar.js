    //menu toggle responsive
    $(document).ready(function() {
      $('.menu-icon').on('click', function () {
        $('nav ul').toggleClass('showing');
      });
      //déclenchement de la fenêtre modal (panier)
      $('.modal').modal();
      //dropdown
      $('.dropdown-trigger').dropdown();
      //sidenav pour responsive
      $('.sidenav').sidenav();
//dropdown mobile
    $('.dropdown-trigger-mobile').dropdown();


    });
