/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

var createTweetElement = function() {
  let section = $("<section>").attr('id', '"tweet-container"');

  let article = $("<article></article>");

  let header = $("<header>");

  let img = $("<img>");

  let span1 = $("<span>");

  let span2 = $("<span>");

  let span3 = $("<span>");

  let p = $("<p>");

  let footer = $("<footer>")

$("section").append(article);
$(article).append(header);
$(header).append(img);
$(header).append(span1);
$(header).append(span2);
$(article).append(p);
$(article).append(footer);
$(footer).append(span3);
// $(footer).append(i) !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


  return section
}



// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
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
}

var $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); // to ad