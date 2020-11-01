var i = 0;
var started = false;

var level=0;
var gamePattern = [];
var userClickedPattern=[];
var buttonColours = ["red", "blue", "green", "yellow"];
console.log(userClickedPattern);


function nextSequence(){
  userClickedPattern = [];
  var randomNumber = Math.round(Math.random() * 3);
  var randomChosenColour=buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  console.log(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  level+=1;
  $("h1").text("Level "+ level);

}

$(".btn").click(function(){
  var userChosenColour= this.id;
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
  playSound(userChosenColour);
  animatePress(this);

    checkAnswer(userClickedPattern.length-1);


});

function playSound(name){

  switch (name) {

    case "blue":
    var audio= new Audio('sounds/blue.mp3');
    audio.play();
    break;
    case "green":
    var audio= new Audio('sounds/green.mp3');
    audio.play();
    break;
    case "red":
    var audio= new Audio('sounds/red.mp3');
    audio.play();
    break;
    case "yellow":
    var audio= new Audio('sounds/yellow.mp3');
    audio.play();
    break;
    default:

  }
}

function animatePress(currentColor){
  currentColor.classList.add("pressed");
  setTimeout(function(){
    currentColor.classList.remove("pressed");
  },100);
}




  $(document).keydown(function(event){
  console.log(event.key);

  console.log(i);
  if (event.key == 'a'  && i == 0){
  nextSequence();
  started = true;

  i++;
  $("h1").text("Level "+ level);
  }



  }) ;



  function checkAnswer(currentLevel) {
      if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");
        if (userClickedPattern.length === gamePattern.length){
          setTimeout(function () {
            nextSequence();
          }, 1000);
        }

      } else {
        var audio= new Audio('sounds/wrong.mp3');
        audio.play();
        console.log("wrong");
        document.body.classList.add("game-over");
        setTimeout(function(){
          document.body.classList.remove("game-over");
        },2000);
        $("h1").text("Game Over! Press 'a' Key to restart.");
        startOver();
      }

  }



  function startOver(){
    gamePattern=[];
    userClickedPattern=[];
    level=0;
    started = false;
    i=0;


  }
