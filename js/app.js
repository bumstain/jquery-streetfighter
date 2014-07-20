$(document).ready(function() {
  //show Ryu's ready state
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })


  .mouseleave(function() {
  //show Ryu's still state
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })


  .mousedown(function() {
  //play hadouken sound; show Ryu's throwing state; animate hadouken
    playHadouken();    
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
    .animate(
      {'left': '860px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left', '500px');
      }
    );
  })
  .mouseup(function() {
  //return to Ryu ready state
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });
});

$(this).keydown(function(event) {
    if(event.which == 88) {
      event.preventDefault();
      $('.ryu-still').hide();
      $('.ryu-throwing').hide();
      $('.ryu-ready').hide();
      $('.ryu-cool').show();
    }
  })

  $(this).keyup(function() {
    event.preventDefault;
    $('.ryu-cool').hide();
    $('.ryu-throwing').hide();
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  });
  
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
