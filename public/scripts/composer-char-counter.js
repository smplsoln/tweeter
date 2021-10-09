const MAX_TWEET_LENGTH = 140;
let twtxtInput = "";

// will be init after document reeady
let tweetTextInputArea;

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
  setCounterColor(counter);

};

// Handler for counter color as per
// the text input length
const setCounterColor = function(counter) {
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

const scrollFunction = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    $goToTopButtom.attr("style", "display:block");
  } else {
    $goToTopButtom.attr("style", "display:none");
  }
};

// When the user clicks on the button,
// scroll to the top
const goToTopHandler = function() {
  $('html, body').animate({scrollTop:0}, 'slow');
  $tweetInputForm.show(700);
  $tweetInputTextArea.focus();
};

const tweetInputToggler = function() {
  // check paragraph once toggle effect is completed
  if (!$tweetInputForm.is(":visible")) {
    goToTopHandler();
  } else {
    $tweetInputForm.hide(700);
    $tweetInputTextArea.blur();
  }
};

// After HTML document is loaded
// set the eventhandler for tweet text input
$(document).ready(function() {
  // --- our code goes here ---
  tweetTextInputArea = $('#tweet-text').on('input', textInputHandler);
});
