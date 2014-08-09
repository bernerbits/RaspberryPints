$(document).ready(function() {
  $('.tapcircle').click(function(event) {
    var beerId = $(this).parent().parent().attr('id');
    alert(beers[beerId].beername);
    // - Use JQuery to pop up a modal pour dialog for this beer, using glass icons and keg fill icons
    // - Update the page in place, and send a dynamic update to pour.php 
  });
});
