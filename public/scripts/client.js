/*
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

/**
 * The tweets section of the App
 */
const MAX_TWEET_CHARS = 140;
const $tweetInputForm = $("#tweet-input-form");
const $tweetInputTextArea = $('#tweet-text');
const $tweetsSection = $('.tweets-section');
const $divError = $("#tweet-error-box");
/**
 * Takes in a tweet object and returns a tweet
 * <article> element containing the entire HTML
 *  structure of the tweet.
 */
const createTweetElement = function(tweet) {
  const $tweet = $(`<article class="tweet">Hello world</article>`);

  // header element
  const $header = $("<header>").addClass("tweet-article-header");

  const $span = $("<span>").addClass("tweet-author-avatar");
  const $img = $("<img>").addClass("tweet-author-image")
    .attr("src", tweet.user.avatars)
    .attr("alt", "");
  const $pre1 = $("<pre>").text(" ");
  const $p1 = $("<p>").addClass("tweet-author-name")
    .text(tweet.user.name);
  const $pre2 = $("<pre>").text(" ");

  $span.append($img, $pre1, $p1, $pre2);

  const $p2 = $("<p>").addClass("tweet-author-handle")
    .text(tweet.user.handle);

  $header.append($span, $p2);

  // tweet text
  const $p3 = $("<p>").addClass("tweet-display-text")
    .text(tweet.content.text);

  // footer element
  const $divfooter = $("<div>").addClass("tweet-footer");

  const $pTimeAgo = $("<p>").addClass("tweet-days-ago")
    .text(timeago.format(tweet.created_at));

  const $spanIcons = $("<span>").addClass("tweet-article-footer-icons");

  const $iFlag = $("<i>").addClass("fas fa-flag tweet-flag-icon");
  const $pre3 = $("<pre>").text(" ");
  const $iRetweet = $("<i>").addClass("fas fa-retweet tweet-retweet-icon");
  const $pre4 = $("<pre>").text(" ");
  const $iHeart = $("<i>").addClass("fas fa-heart tweet-heart-icon");
  const $pre5 = $("<pre>").text(" ");

  $spanIcons.append($iFlag, $pre3, $iRetweet, $pre4, $iHeart, $pre5);

  // footer
  $divfooter.append($pTimeAgo, $spanIcons);

  const $article = $("<article>").addClass("tweet-article");
  $article.append($header, $p3, $divfooter);

  const $divBorder = $("<div>").addClass("tweet-article-border");
  $divBorder.append($article);

  return $divBorder;
};


// HTML of tweet display section for reference
/*
        <div class="box tweet-article-border">
          <article class="tweet-article">
            <header class="tweet-article-header">
              <span class="tweet-author-avatar">
                <img src="https://i.imgur.com/73hZDYK.png" class="tweet-author-image" alt="">
                <pre> </pre>
                <p class="tweet-author-name">Newton</p>
                <pre> </pre>
              </span>
              <p class="tweet-author-handle">@SirIsaac</p>
            </header>
            <p class="tweet-display-text">Standing on the shoulders of giants</p>
            <div class="tweet-footer">
              <p class="tweet-days-ago">10 days ago</p>
              <span class="tweet-article-footer-icons">
                <i class="fas fa-flag tweet-flag-icon"></i>
                <pre> </pre>
                <i class="fas fa-retweet tweet-retweet-icon"></i>
                <pre> </pre>
                <i class="fas fa-heart tweet-heart-icon"></i>
                <pre> </pre>
              </span>
            </div>
          </article>
        </div>
*/

// generate a tweet object based on current tweet input
const getTweet = function(tweetTextInput) {
  // form[0]textarea.value := input text
  let tweet = {
    "user": {
      "name": "IAmGroot",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@IAmGroot"
    },
    "content": {
      "text": `I am Groot ${tweetTextInput}`
    },
    "created_at": Date.now()
  };

  return tweet;
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

// comparator for the tweet time
const compareTweetTime = function(tw1, tw2) {
  return tw1.created_at - tw2.created_at;
};

// render the tweets to the tweets section
const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container

  // first clear the current tweets if any from the tweets section
  $tweetsSection.empty();
  let $tweet;

  // sort the tweets
  tweets.sort(compareTweetTime);

  for (const tweet of tweets) {
    $tweet = createTweetElement(tweet);
    $tweetsSection.prepend($tweet);
  }
};

// Perform a GET request to server and render
// the fetched tweets to the APP tweet section
const getTweetsFromServer = function() {
  $.ajax({
    url: "/tweets",
    method: "GET",
    // dataType: "json", // for now dont set data type
    success: (tweets) => {
      console.log("tweets from server GET /tweets:", tweets);
      renderTweets(tweets);
    },

    error: (err) => {
      console.log(`Error during GET /tweets: ${err}`);
    }
  });
};

// Handler for tweet form submit
const tweetSubmitHandler = function(event) {
  console.log(event);

  // IMP: prevent default for action like POST, etc
  event.preventDefault();

  const tweetTextInput = event.target[0].value;

  if (!tweetTextInput) {
    $divError.text(`Error: Tweet empty! Please enter tweet text!`);
    $divError.show(500);
    return;
  }
  if ((tweetTextInput) && tweetTextInput.length > MAX_TWEET_CHARS) {
    $divError.text(`Error: Maximum tweet length (${MAX_TWEET_CHARS}) exceeded!`);
    $divError.show(500);
    return;
  }
  $divError.hide();

  // reset counter value to max tweet length
  const counterOp = this[2];
  counterOp.value = MAX_TWEET_CHARS;
  setCounterColor(MAX_TWEET_CHARS);

  // send current tweet to server to store
  const serializedTweet = $(this).serialize();
  console.log({ serializedTweet });
  // clear the tweet text input
  $tweetInputTextArea.val('');

  // POST the tweet to server
  $.post("/tweets", serializedTweet, (response) => {
    // tweet successfully posted to server
    console.log(response);

    // now get latest and put in tweets section
    getTweetsFromServer();
  });
};

// App html loaded and perform the initial setup
$(document).ready(() => {
  // this is the initial one time
  // setup of the tweets section on app
  getTweetsFromServer();

  // setup tweet button handler for tweet submit
  $tweetInputForm.submit(tweetSubmitHandler);
});
