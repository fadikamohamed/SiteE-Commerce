
$(function() {
  var menVisible = $('#').is(':visible');
  var womanVisible = $('#').is(':visible');
  var childrenVisible = $('#').is(':visible');
  var accessoryVisible = $('#').is(':visible');

  if (menVisible) {
    $('###').hide();
  } else if (womanVisible) {
    $('###').hide();
  } else if (childrenVisible) {
    $('###').hide();
  } else if (accessoryVisible) {
    $('###').hide();
  }






  //Au clic sur le bouton homme de la navBarre
  $('#').click(function() {
    //Montrer les divs men et categoriesMen
    $('#').show();
    //Cacher les divs woman et categoriesWoman
    $('#').hide();
    //Cacher les divs children et categoriesChildren
    $('#').hide();
    //Cacher les divs accessory et categoriesAccessory
    $('#').hide();
  });
  //Au clic sur le bouton femme de la navBarre
  $('#').click(function() {
    //Montrer les divs woman et categoriesWoman
    $('#').show();
    //Cacher les divs men et categoriesMen
    $('#').hide();
    //Cacher les divs children et categoriesChildren
    $('#').hide();
    //Cacher les divs accessory et categoriesAccessory
    $('#').hide();
  });
  //Au clic sur le bouton homme de la navBarre
  $('#').click(function() {
    //Montrer les divs children et categoriesChildren
    $('#').show();
    //Cacher les divs men et categoriesMen
    $('#').hide();
    //Cacher les divs woman et categoriesWoman
    $('#').hide();
    //Cacher les divs accessory et categoriesAccessory
    $('#').hide();
  });
  //Au clic sur le bouton accessoire de la navBarre
  $('#').click(function() {
    //Montrer les divs accessory et categoriesAccessory
    $('#').show();
    //Cacher les divs men et categoriesMen
    $('#').hide();
    //Cacher les divs woman et categoriesWoman
    $('#').hide();
    //Cacher les divs children et categoriesChildren
    $('#').hide();
  });

});
