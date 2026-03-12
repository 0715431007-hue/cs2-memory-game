console.log("Script started");

// number of guesses variable
let guesses = 0;

// variable to store the first card guess Id (empty to start)
let firstCardId = "";

// variable to store second card guess Id
let secondCardId = "";

// flips card to reveal text
function flipCard(cardId){
    // Test that our click is hooked up
    console.log("click");

    // Gets card element by the Id
    let card = document.getElementById(cardId);

    // change text/background color to reveal text
    card.style.color = "white";
    card.style.backgroundColor = "blue";

    // check which choice it is
    if (firstCardId == "") {

        // remember first choice
        firstCardId = cardId;
        // console.log(firstCardId);
    }
    else {
         // remember second choice
        secondCardId = cardId;
        // count a guess after second choice
        guesses = guesses + 1;
        // console.log(secondCardId);
        // console.log("guesses = " + guesses);
        let guessDisplay = document.getElementById("guesses");
        guessDisplay.innerText = "guesses: " + guesses;
        // checkMatch();
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    // get the HTML elements that were clicked
    let card1 = document.getElementById(firstCardId);
    let card2 = document.getElementById(secondCardId);

    if(card1.innerText == card2.innerText) {
        card1.style.backgroundColor = "green";
        card2.style.backgroundColor = "green";
    }
    else {
        card1.style.color = "purple";
        card1.style.backgroundColor = "purple";
        card2.style.color = "purple";
        card2.style.backgroundColor = "purple";
    }
    firstCardId = "";
    secondCardId = "";
}