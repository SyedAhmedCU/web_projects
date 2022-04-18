let drumKeys = ["w", "a", "s", "d", "j", "k", "l"]; //list of the drum keys

document.addEventListener("keydown", function(e){
    var keyPressed = e.key; // listen which key is pressed
    var drumKeyPressed = drumKeys.includes(keyPressed); // check if the key pressed is included in the drum keys
    if (drumKeyPressed){
        makeSound(keyPressed); //actitive makeSound(key) function to play specific audio.mp3 to pressed key
        buttonPressed(keyPressed) //actitive buttonPressed(currentDrum) function to play specific audio.mp3 to pressed key
    }    
})

document.querySelectorAll(".drum").forEach(item => {item.addEventListener("click", function(){ //listen where click event happen
    var buttonInnerHTML= this.innerHTML; //find the text inside html element "button"  when clicked on the drum button
    makeSound(buttonInnerHTML); //actitive makeSound(key) function to play specific audio.mp3 to clicked button
    buttonPressed(buttonInnerHTML); //actitive buttonPressed(current) function to play specific audio.mp3 to clicked button
})});

function makeSound(key){
    // switch to specific audio file to corresponding drum buttons or keys
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break; 
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;      
        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;  
       case "k":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
       case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;  
        default: console.log(key);
            break;
    }
}

function buttonPressed(current){
    var currentDrum = document.querySelector("."+current); // find the current button class inside HTML
    // add a class "pressed" to its html classlist so that the .pressed class (shadow effect) inside CSS is activated
    currentDrum.classList.add("pressed"); 
    setTimeout (function(){
        // remove the .pressed (shadow effect) after 100 milisec of the button clicked or pressed
        currentDrum.classList.remove("pressed")}, 100); 
}



//-----Other way to write the code

// var numOfDrumButtons = document.querySelectorAll(".drum").length;

// for(var i=0; i< numOfDrumButtons; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", handleClick.bind(null, i));
// }

// function handleClick(i){
//     if (i === 0) {
//         var audio = new Audio("sounds/tom-1.mp3");
//         audio.play();}
//     ..... 
// }