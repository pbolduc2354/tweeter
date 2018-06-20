/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
// Fake data taken from tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];
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
          loadTweets();
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

});


