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

function bmiCalculator(weight, height) {
    
    // Calculate BMI
    const bmi = Math.round(weight / Math.pow(height, 2));
  
    // Determine and return the appropriate message
    if (bmi < 18.5) {
    console.log(`Your BMI is ${bmi}, so you are underweight.`);
    } else if (bmi <= 24.9) {
    console.log(`Your BMI is ${bmi}, so you have a normal weight.`);
    } else {
    console.log(`Your BMI is ${bmi}, so you are overweight.`);
    }
  }
 
const weight = (prompt("What is your weight in kilograms?"));
const height = (prompt("What is your height in meters?"));

const result = bmiCalculator(weight, height);
console.log(result);
 
