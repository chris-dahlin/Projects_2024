// var n = Math.random();
// n = n * 6;
// n = Math.floor(n) + 1;
// console.log(n); 

// var loveScore = Math.floor(Math.random() * 100) + 1;

// if (loveScore >= 80) {
//     console.log("Your love score is " + loveScore + "%. You are the best!");
// }
//     if (loveScore > 30 && loveScore < 80) {
//         console.log("You are almost perfect!");
//     }
//     if (loveScore <= 29) {
//     console.log("Your love score is " + loveScore + "%. You go together like oil and water.");
// }


// function bmiCalculator(weight, height) {
//     var bmi = weight / (height * height);
//     return Math.round(bmi);
//   }
  
//   console.log(bmiCalculator(65, 1.8));

// function bmiCalculator(weight, height) {
    
//     // Calculate BMI
//     const bmi = Math.round(weight / Math.pow(height, 2));
  
//     // Determine and return the appropriate message
//     if (bmi < 18.5) {
//     console.log(`Your BMI is ${bmi}, so you are underweight.`);
//     } else if (bmi <= 24.9) {
//     console.log(`Your BMI is ${bmi}, so you have a normal weight.`);
//     } else {
//     console.log(`Your BMI is ${bmi}, so you are overweight.`);
//     }
//   }
 
// const weight = (prompt("What is your weight in kilograms?"));
// const height = (prompt("What is your height in meters?"));

// const result = bmiCalculator(weight, height);
// console.log(result);

// Leap Year

// function isLeapYear(year) {
//     if (year % 400 === 0) {
//     return "Leap year";
//     } else if (year % 100 === 0) {
//         return "Not leap year.";
//     } else if (year % 4 === 0) {
//         return "Leap year";
//     } else {
//         return "Not leap year.";
//     }
//   }

//   console.log(isLeapYear(2022));


// var guestList = ["Chris", "Bob", "Amanda", "June", "Oliver", "Aliza"];

// var guestName = prompt("What is your name?");

// if (guestList.includes(guestName)) {
//     alert("Welcome back, " + guestName + "!");
// }
// else {
//   alert("We're sorry, " + guestName + ", but you are not on our list.");
// }

// function fizzbuzz(n) {
//   for (let i = 1; i <= n; i++) {
//     let output = "";
//     if (i % 3 === 0) output += "Fizz";
//     if (i % 5 === 0) output += "Buzz";
//     console.log(output || i);
//   }
// }

// // Example usage
// fizzbuzz(100); // Prints FizzBuzz output from 1 to 100

// function fizzbuzz(n) {
//   let result = []; // Initialize an empty array to store the output
//   for (let i = 1; i <= n; i++) {
//     let output = "";
//     if (i % 3 === 0) output += "Fizz";
//     if (i % 5 === 0) output += "Buzz";
//     result.push(output || i); // Add the output to the result array
//   }
//   return result; // Return the result array
// }

// // Example usage
// let outputArray = fizzbuzz(100);
// console.log(outputArray); // Prints the output array containing FizzBuzz output from 1 to 100

// function whosBuyingLunch(names) {
//   // Get the length of the names array
//   const length = names.length;
  
//   // Generate a random index between 0 and length - 1
//   const randomIndex = Math.floor(Math.random() * length);
  
//   // Select the name at the randomly generated index
//   const selectedName = names[randomIndex];
  
//   // Return the output string
//   return `${selectedName} is going to buy lunch today!`;
// }

// // Example input
// const names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

// // Call the function and store the result
// const output = whosBuyingLunch(names);

// // Output the result
// console.log(output);

// function whoPaying(names){

// var people = names.length;
// var randomPerson = Math.floor(Math.random() * people);
// var name = names[randomPerson];

// return name + " is going to buy lunch today!";
// }

// var i = 1;

// while(i<5) {
//   console.log(i);
//   i++
// }

// var output = []; 
// var count = 1;

// function fizzBuzz() {

// while (count <= 100) {

//   if (count % 3 == 0 && count % 5 == 0) {
//         output.push("FizzBuzz");
//     } else if (count % 3 == 0) {
//         output.push("Fizz");
//     } else if (count % 5 == 0) {
//         output.push("Buzz");
//     } else {
//         output.push(count);
//     }
//     count++;

//     console.log(output);
//   }
// }

// var count = 99;

// while (count >= 1) {
//   console.log(count + " bottles of beer on the wall, " + count + " bottles of beer. Take one down and pass it around, " + count + " bottles of beer on the wall. ");
//   count--;
//   if (count == 1) {
//     console.log(count + " bottle of beer on the wall, " + count + " bottle of beer. Take one down and pass it around, " + count + " bottle of beer on the wall. ");
//   }
//   if (count <= 0) {
//     console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
//   }
// }

// var numberOfBottles = 99
// while (numberOfBottles >= 0) {
//     var bottleWord = "bottle";
//     if (numberOfBottles === 1) {
//         bottleWord = "bottles";
//     } 
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
// 	numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
// }

// var output = []; 

// function fizzBuzz() {

// for (count = 1; count <= 100; count++) {

//   if (count % 3 == 0 && count % 5 == 0) {
//         output.push("FizzBuzz");
//     } else if (count % 3 == 0) {
//         output.push("Fizz");
//     } else if (count % 5 == 0) {
//         output.push("Buzz");
//     } else {
//         output.push(count);
//     }
//     console.log(output);
//   }
// }

// fizzBuzz();

function fibonacciGenerator (n) {
  //Do NOT change any of the code above 👆
      
      //Write your code here:
      
  var output = [];

  if (n === 1) {
    output = [0];
  }
      
  else if (n === 2) {
    output = [0, 1];
  }

  else {
    output = [0, 1];

    for (var i = 2; i < n; i++) {

    output.push(output[output.length -2] + output[output.length - 1]);
    }
  }

  return output;
      
      //Return an array of fibonacci numbers starting from 0.
      
  //Do NOT change any of the code below 👇
  }

  output = fibonacciGenerator(10);
  console.log(output);
  