$(document).ready(function() {
  // --- our code goes here ---
  // count the number of character in the textBox and make it red when exceed number of character

  $("#textBox").on('keyup', function() {

// establish the countdown
var test = 140 - $(this).val().length;
$('.counter').text(test);

// if statement to make the color red when the number of caracter is exceed
if(test < 0){
  $('.counter').css("color", "red");
} else {
  $('.counter').css("color", "black");
}
});
});