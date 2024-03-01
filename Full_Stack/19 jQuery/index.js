// $("h1").addClass("big-title margin-50");

$("button").html("<em>Click me!</em>");

console.log($("img").attr("src"));

$("a").attr("href", "https://www.youtube.com");


$('button').click(function() {
$('h1').slideUp().slideDown().slideUp().slideDown().animate({fontSize: '50px'});
});


// $("h1").on("mouseover", function() {
//     $("h1").css("color", "purple");
// });