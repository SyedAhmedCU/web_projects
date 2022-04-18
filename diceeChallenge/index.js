var randomNumber1 = Math.ceil(Math.random()*6); // 1-6 random number
var randomNumber2 = Math.ceil(Math.random()*6); // 1-6 random number

function rollingDice(randomNumber, dice){
    if (dice ===1){
        var diceRoll = document.getElementById("img1");
    } 
    else if (dice === 2) {
        var diceRoll = document.getElementById("img2");
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
rollingDice(randomNumber1, 1);
rollingDice(randomNumber2, 2);

if (randomNumber1 === randomNumber2) {
    document.getElementById("title1").innerHTML = "It's A Draw!";
    console.log("Draw!");
} else if (randomNumber1 != randomNumber2) {
    if (randomNumber1 > randomNumber2 ) {
        document.getElementById("title1").innerHTML = "Player 1 Wins!";
    } else {
        document.getElementById("title1").innerHTML = "Player 2 Wins!";
    }  
} 

