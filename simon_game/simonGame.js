let buttonColor = ["green", "red", "yellow", "blue"];

$(".btn").click(function(){
    var buttonClicked = this.id;
    //console.log(buttonClicked);
    makeSound(buttonClicked);
    buttonPressed(buttonClicked);
    setTimeout(function(){
        randomSequence (buttonClicked)}, 800);
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

function randomSequence (){
    var randomNumber = Math.floor(Math.random()*4);
    var ramdomButton = buttonColor[randomNumber];
    buttonPressed(ramdomButton);
    makeSound(ramdomButton);
}

function buttonPressed(current){
    // add .pressed css class (shadow effect) to current button class inside HTML
    $("."+current).addClass("pressed"); 

    setTimeout (function(){
        // remove the .pressed (shadow effect) after 100 milisec of the button clicked or pressed
        $("."+current).removeClass("pressed")}, 300); 
}