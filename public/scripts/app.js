/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
// Fake data taken from tweets.json

$(document).ready(function() {

function renderTweets (tweetData) {
  $('#tweets-container').empty();
  for (let article of tweetData) {
    var $tweet = createTweetElement(article);
    $('#tweets-container').prepend($tweet);
  }
}



function createTweetElement (tweet) {

  let $tweet = $("<article>").addClass('tweet-body');

  let $header = $("<header>").addClass("profil-info");

  let $img = $("<img>").addClass("user").attr("src", tweet.user.avatars.small);

  let $span1 = $("<span>").addClass("profil-name").text(tweet.user.name);

  let $span2 = $("<span>").addClass("user-name").text(tweet.user.handle);

  let $p = $("<p>").addClass("post-text").text(tweet.content.text);

  let $footer = $("<footer>").addClass("time-pass");

  let $span3 = $("<span>").addClass("footer-text").text(tweet.created_at);

  let $icon1 = $("<i>").addClass("fas fa-flag footer-icon first-icon");

  let $icon2 = $("<i>").addClass("fas fa-retweet footer-icon");

  let $icon3 = $("<i>").addClass("fas fa-heart footer-icon");

  // let avatar = $("").......................

$tweet.append($header);
$header.append($img);
$header.append($span1);
$header.append($span2);
$tweet.append($p);
$tweet.append($footer);
$footer.append($span3);
$footer.append($icon1);
$footer.append($icon2);
$footer.append($icon3);

return $tweet;
}

// Test / driver code (temporary)
loadTweets();

// empêcher le boutton de retourner a la page /tweet
  $("form").on('submit', function(event) {
    event.preventDefault();
      $.ajax({
        method: 'POST',
        url: 'http://localhost:8080/tweets',
        data: $(this).serialize(),
        success: function(response) {
          if($(this) && 140 > $(this)["0"].data.length - 5){
           loadTweets();
          } else {
            alert("Enter a valid message.")
          }
        }

      })
  });

  function loadTweets() {
    $.ajax({
      url: '/tweets',
      type: 'GET',
      success: renderTweets
    });
  }

// button toggle
$("input.compose-btn").click(function() {
  $("section.new-tweet").slideToggle(200);
  $("textarea").focus();
});








});


