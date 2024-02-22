// var n = Math.random();
// n = n * 6;
// n = Math.floor(n) + 1;
// console.log(n); 

var loveScore = Math.floor(Math.random() * 100) + 1;

if (loveScore >= 80) {
    console.log("Your love score is " + loveScore + "%. You are the best!");
}
    if (loveScore > 30 && loveScore < 80) {
        console.log("You are almost perfect!");
    }
    if (loveScore <= 29) {
    console.log("Your love score is " + loveScore + "%. You go together like oil and water.");
}