var dialogHtml = null;
var glassDiv = null;

$(document).ready(function() {
  
  glassDiv = $('<div></div>');
  glassDiv.css({
    width: "100%",
    height: "100%",
    'z-index': 10,
    position: "fixed",
    top: 0,
    left: 0,
    margin: 0,
    padding: 0
  });
  glass = $('<div></div>');
  glass.css({
    width: "100%",
    height: "100%",
    'z-index': 10,
    position: "fixed",
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    'background-color': '#888888'
  });
  glassDiv.append(glass);
  glass.fadeTo(0, 0.5);

  $.get('pours/pours.html', null, function(html) { dialogHtml = html; registerClicks(); }, 'html');

});

function registerClicks()
{
  $('.tapcircle').click(function(event) {
    var beerId = $(this).parent().parent().attr('id');
    curBeer = beers[beerId];

    dialog = $(dialogHtml);
    glassDiv.prepend(dialog);
    dialog.css('z-index', 11);

    var h1 = dialog.find('h1 span');
    h1.text(curBeer.beername);

    dialog.find('li').click(function() {
      dialog.find('li').css('background-color','transparent');
      $(this).css('background-color', 'rgb(' + curBeer.srmRgb + ')');
      dialog.find('.glass-name').text($(this).attr('name'));
      dialog.find('.glass-size').text($(this).attr('data-oz') + " Ounces");
    });

    glassDiv.css('visibility','hidden');
    $('body').append(glassDiv);

    console.log(h1[0].offsetWidth);
    while (h1[0].offsetWidth > 320)
    {
      var size = h1.css('font-size');
      size = size.substr(0,size.length-2);
      size = parseInt(size);
      h1.css('font-size',(size-1)+'px');
      console.log(h1.css('font-size') + ' ' + h1[0].offsetHeight);
    }

    glassDiv.css('visibility','visible');

    // - Use JQuery to pop up a modal pour dialog for this beer, using glass icons and keg fill icons
    // - Update the page in place, and send a dynamic update to pour.php 
  });
}
