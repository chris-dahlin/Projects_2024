var buttonColours = ["red", "blue", "green", "yellow"]; 

var gamePattern = [];

randomChosenCoolour = buttonColours[Math.floor(Math.random() * 4)];

function nextSequence() {

    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);
}
