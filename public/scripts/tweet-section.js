



// After HTML document is loaded

// set the mouseover for tweet article box
$(document).ready(function() {
  $(".tweet-article-border").mouseenter(function() {
    $(this).css("box-shadow", "5px 5px 5px #555");
  }).mouseleave(function() {
    $(this).css("box-shadow", "0px 0px 0px #555");
  });

  // flag-icon mouseover
  $("tweet-flag-icon").mouseenter(function() {
    $(this).css("box-shadow", "5px 5px 5px #555");
  }).mouseleave(function() {
    $(this).css("box-shadow", "0px 0px 0px #555");
  });

  $("tweet-retweet-icon").mouseenter(function() {
    $(this).css("box-shadow", "5px 5px 5px #555");
  }).mouseleave(function() {
    $(this).css("box-shadow", "0px 0px 0px #555");
  });

  $("tweet-heart-icon").mouseenter(function() {
    $(this).css("box-shadow", "5px 5px 5px #555");
  }).mouseleave(function() {
    $(this).css("box-shadow", "0px 0px 0px #555");
  });


});

