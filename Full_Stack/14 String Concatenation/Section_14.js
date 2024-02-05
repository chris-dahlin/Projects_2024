// var message = "Hello";
// var name = "Chris";

// alert(message + ' there' + ' ' + name);

// console.log(name.length);


// var tweet = prompt('Complete your tweet:');
// var tweeetCount = tweet.length;
// alert("You have wrriten " + tweeetCount + " characters, you have " + (140 - tweeetCount) + " characters remaining.");


var tweet = prompt('Complete your tweet:');
var tweetUnder140 = tweet.slice(0,140);
console.log(tweetUnder140);

