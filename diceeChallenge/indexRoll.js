
var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var buttonReset = document.getElementById("btnReset");

function rollingDice(dice){
    var randomNumber = Math.ceil(Math.random()*6); // 1-6 random number

    if (dice ===1){
        var diceRoll = document.getElementById("img1");
    } 
    else if (dice === 2) {
        var diceRoll = document.getElementById("img2");
    }
    else if (dice === 0) {
        document.getElementById("img2").setAttribute("src", "images/dice.png");
        document.getElementById("img1").setAttribute("src", "images/dice.png");
    }


    if (randomNumber ===1) {
        diceRoll.setAttribute("src", "images/dice1.png");
    }
    if (randomNumber ===2) {
        diceRoll.setAttribute("src", "images/dice2.png");
    }
    if (randomNumber ===3) {
        diceRoll.setAttribute("src", "images/dice3.png");
    }
    if (randomNumber ===4) {
        diceRoll.setAttribute("src", "images/dice4.png");
    }
    if (randomNumber ===5) {
        diceRoll.setAttribute("src", "images/dice5.png");
    }
    if (randomNumber ===6) {
        diceRoll.setAttribute("src", "images/dice6.png");
    }

}

button1.addEventListener("click", rollingDice.bind(null, 1));
button2.addEventListener("click", rollingDice.bind(null, 2));
buttonReset.addEventListener("click", rollingDice.bind(null, 0));

//rollingDice(randomNumber2, 2);


