let buttonColor = ["green", "red", "yellow", "blue"];
let gamePattern = [];
let clickPattern = [];

$(document).keydown(function(event){
    var key = event.code;
    console.log(key);
    if (key === "Space" && gamePattern.length === 0){
        setTimeout(function(){
            randomSequence ()}, 800);
    }
});

$(".btn").click(function(){
    var buttonClicked = this.id;
    clickPattern.push(buttonClicked);
    //console.log("clickPattern "+clickPattern);
    makeSound(buttonClicked);
    buttonPressed(buttonClicked);
    if (clickPattern.length === gamePattern.length){
        // Check user click input with gamePattern
        if (clickPattern.toString() != gamePattern.toString()){ 
            gameOver();
        }
        else {
            setTimeout(function(){
                randomSequence ()}, 800);
        }
    }
    else if(clickPattern.length > gamePattern.length){
        gameOver();
    }
})

function makeSound(key){
    switch (key){
        case "green":
            var greenSound = new Audio("sounds/green.mp3");
            greenSound.play();
            break;
        case "red":
            var redSound = new Audio("sounds/red.mp3");
            redSound.play();
            break;
        case "yellow":
            var yellowSound = new Audio("sounds/yellow.mp3");
            yellowSound.play();
            break;
        case "blue":
            var blueSounds = new Audio("sounds/blue.mp3");
            blueSounds.play();
            break;
        case "wrong":
            var wrongSounds = new Audio("sounds/wrong.mp3");
            wrongSounds.play();
            break;
        default: console.log(key);
            break;
    }
}

function randomSequence(){
    var level = 0
    var randomNumber = Math.floor(Math.random()*4);
    var ramdomButton = buttonColor[randomNumber];
    gamePattern.push(ramdomButton);
    //console.log("gamePattern "+gamePattern);
    for (let i = 0; i < gamePattern.length; i++) {
        level = i+1;
        setTimeout(function(){
            const seq = gamePattern[i];
            buttonPressed(seq);
            makeSound(seq);}, i*800);
    }
    //console.log(level);
    $("h1").html("Level "+ level +" <br> <br>  Watch Carefully & Match The Sequence!");
    clickPattern = [];
}

function buttonPressed(current){
    // add .pressed css class (shadow effect) to current button class inside HTML
    $("."+current).addClass("pressed"); 

    setTimeout (function(){
        // remove the .pressed (shadow effect) after 300 milisec of the button clicked or pressed
        $("."+current).removeClass("pressed")}, 300); 
}

function gameOver(){
    makeSound("wrong");
    $("body").addClass("game-over");
    setTimeout (function(){
        // remove the .pressed (shadow effect) after 300 milisec of the button clicked or pressed
        $("body").removeClass("game-over")}, 300);  
    $("h1").html("Game Over! <br> <br> Press Space bar To Try Again");
    gamePattern = [];
    clickPattern = [];
}