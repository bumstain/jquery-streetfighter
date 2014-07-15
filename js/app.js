$(document).ready(function() {
  //shows ryu ready state
  $('.ryu').mouseenter(function() {
    $('ryu-cool').hide();
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })


  //shows ryu still state
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('ryu-cool').hide();
    $('.ryu-still').show();
  })


  //plays hadouken sound; shows ryu throwing state
  .mousedown(function() {
    playHadouken();
    $('.ryu-ready').hide();
    $('ryu-cool').hide();
    $('ryu-still').hide();
    $('.ryu-throwing').show();
    $('.hadouken').show();
    // animate hadouken to the right of the screen
  //   .animate({'left': '860px'}, 500,
  //   	function() {
  //   		$(this).hide();
  //   		$(this).css('right', '360px');
  //   	});
  })

  //shows ryu ready state
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-cool').hide();
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });

  $("body").keydown(function(event) {
  	if (event.which == 88){
  		event.preventDefault();
  		$('ryu-still').hide();
  		$('ryu-ready').hide();
  		$('ryu-throwing').hide();
  		$('ryu-cool').show();
  	}
  })

  $(this).keyup(function(event) {
  	if (event.which == 88) {
  		event.preventDefault();
  		$('ryu-cool').hide();
  		$('ryu-ready').hide();
  		$('ryu-throwing').hide();
  		$('ryu-still').show();
  	}
  });
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
