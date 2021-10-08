/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

/**
 * The tweets section of the App
 */
const $tweetsSection = $('.tweets-section');


const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1451116232227
};

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1571116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];



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

const compareTweetTime = function(tw1, tw2) {
  return tw1.created_at - tw2.created_at;
};

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

$(document).ready(() => {
  // Test / driver code (temporary)
  // $('#tweets-container').append($tweet);
  // const $tweet = createTweetElement(tweetData);
  // console.log($tweet); // to see what it looks like
  // $('.tweets-section').append($tweet);

  // render tweets from an attar of tweets 'data'
  renderTweets(data);

});