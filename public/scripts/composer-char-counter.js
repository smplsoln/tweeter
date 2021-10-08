const MAX_TWEET_LENGTH = 140;
let twtxtInput = "";
let tweetTextInputArea;

const setTweetCounterColor = function(counter) {
  if (counter < 0) {
    $(".counter").css("color", "red");
  } else {
    $(".counter").css("color", "black");
  }
};

// set apropriate tweet button state
const setTweetButtonState = function(counter) {
  if (counter < 0 || counter === MAX_TWEET_LENGTH) {
    $(".tweet-button").attr("disabled", true);
  } else {
    $(".tweet-button").removeAttr("disabled");
  }
};

// tweet text input handler
const textInputHandler = function(event) {

  // save latest tweet text value
  twtxtInput = event.target.value;

  // set counter value as per the latest tweet text
  const counterOp = this.form[2];
  let counter = counterOp.value;
  counterOp.value = MAX_TWEET_LENGTH - twtxtInput.length;
  counter = counterOp.value;
  console.log(`Counter after input ${counter}`);

  // set apt counter color
  setTweetCounterColor(counter);

};

// After HTML document is loaded
// set the eventhandler for tweet text input
$(document).ready(function() {
  // --- our code goes here ---
  tweetTextInputArea = $('#tweet-text').on('input', textInputHandler);
});
