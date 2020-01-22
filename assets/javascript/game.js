//create variables for starting game
//wins
//losses
//total score
//random number
//create array to hold images
//create variable to generate random crystal number
//create variable to generate random number to guess

$(document).ready(function() {
  var wins = 0;
  var losses = 0;
  var totalScore = 0;

  var randomNumber = Math.floor(Math.random() * 120) + 16;
  $("#randomNumberText").text(randomNumber);

  var imageArray = [
    "assets/images/blue.png",
    "assets/images/green.png",
    "assets/images/orange.png",
    "assets/images/yellow.jpeg"
  ];

  for (let i = 0; i < imageArray.length; i++) {
    var crystalImage = $("<img>");
    crystalImage.addClass("crystal-image");
    crystalImage.attr("src", imageArray[i]);
    crystalImage.attr("data-crystalvalue", genRandom());
    $("#images").append(crystalImage);
  }

  function genRandom() {
    return Math.floor(Math.random() * 12) + 1;
  }

  function gameReset() {
    totalScore = 0;
    $("#currentScoreCounter").text(totalScore);

    randomNumber = Math.floor(Math.random() * 120) + 16;
    $("#randomNumberText").text(randomNumber);
    $("#images").empty();
    for (let i = 0; i < imageArray.length; i++) {
      crystalImage = $("<img>");
      crystalImage.addClass("crystal-image");
      crystalImage.attr("src", imageArray[i]);
      crystalImage.attr("data-crystalvalue", genRandom());
      $("#images").append(crystalImage);
    }
    $(".crystal-image").on("click", handleCrystalClick);
  }
  
  function handleCrystalClick() {
    var crystalValue = parseInt($(this).attr("data-crystalvalue"));
    console.log(crystalValue);

    totalScore = totalScore + crystalValue;
    $("#currentScoreCounter").text(totalScore);
    console.log(totalScore, randomNumber);

    if (totalScore === randomNumber) {
      wins++;
      $("#winCount").text(wins);
      gameReset();
      return false;
    }
    if (totalScore > randomNumber) {
      losses++;
      $("#lossCount").text(losses);
      gameReset();
      return false;
    }
    console.log("this worked");
  }
  $(".crystal-image").on("click", handleCrystalClick);
});
