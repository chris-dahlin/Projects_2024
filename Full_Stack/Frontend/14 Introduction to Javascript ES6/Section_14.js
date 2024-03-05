// var message = "Hello";
// var name = "Chris";

// alert(message + ' there' + ' ' + name);

// console.log(name.length);


// var tweet = prompt('Complete your tweet:');
// var tweeetCount = tweet.length;
// alert("You have wrriten " + tweeetCount + " characters, you have " + (140 - tweeetCount) + " characters remaining.");


// var tweet = prompt('Complete your tweet:');
// var tweetUnder140 = tweet.slice(0,140);
// console.log(tweetUnder140);
// alert(tweetUnder140);
// // Above code can be combined to create the below code
// alert(prompt("Compose your tweet:").slice(0,140));


// var name = "Chris";
// name = name.toUpperCase();
// console.log(name);
// name = name.toLowerCase();
// console.log(name);

// name = prompt("What is your name?");
// console.log("Hello " + name);


// //Hello, Chris.


// var name = prompt("What is your name?");

// capitalName = name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase();
// console.log("Hello " + capitalName);


// var dogAge = prompt("How old is your dog?");
// humanAge = (dogAge - 2) * 4 + 21;
// console.log("Your dog is " + humanAge + " years old in human years.");

// var age = prompt("How old are you?");
// var days = age * 365.25;
// console.log("You are " + days + " days old.");

// var age = prompt("How old are you?");
// var seconds = age * 365.25 * 24 * 60 * 60;
// console.log("You are " + seconds + " seconds old.");



// var x = 3;
// var y = x++;
// console.log(y);
// y += 1;
// console.log(y);


// function getMilk() {   
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
//   }

  // function getMilk(funds) {   
  //   console.log("leaveHouse");
  //   console.log("moveRight");
  //   console.log("moveRight");
  //   console.log("moveUp");
  //   console.log("moveUp");
  //   console.log("moveUp");
  //   console.log("moveUp");
  //   console.log("moveRight");
  //   console.log("moveRight");

  //   var numberOfBottles = Math.round(funds / 1.5);

  //   console.log("buy " + numberOfBottles + " bottles of milk");
  //   console.log("moveLeft");
  //   console.log("moveLeft");
  //   console.log("moveDown");
  //   console.log("moveDown");
  //   console.log("moveDown");
  //   console.log("moveDown");
  //   console.log("moveLeft");
  //   console.log("moveLeft");
  //   console.log("enterHouse");
  //   return funds % 1.5; // remainder of funds
  // }

  // var change = getMilk(4);
  // console.log("Change: " + "$" + change);



// function lifeInWeeks(age) {
    
//     /************Don't change the code above************/    
        
//         //Write your code here.
//     var yearsRemaining = 90 - age;
//     var days = yearsRemaining * 365;
//     var weeks = yearsRemaining * 52; 
//     var months = yearsRemaining * 12;
   
//     console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
        
        
//     /*************Don't change the code below**********/
//     }
    
//     lifeInWeeks(37);
  



//Create your function below this line.
//The first parameter should be the weight and the second should be the height.




/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

bmi = weight(kg)/height(m)^2

*/

// var bmi = bmiCalculator(65, 1.8); 

function bmiCalculator(weight, height) {
  var bmi = weight / (height * height);
  return Math.round(bmi);
}

console.log(bmiCalculator(65, 1.8));
