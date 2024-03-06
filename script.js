var guessCounter = 0;
var zahl1, zahl2, zahl3; 

function startGame() {
  document.getElementById("game-container").style.display = "block";
  document.getElementById("game-results").innerHTML = "";
  guessCounter = 0;
  zahl1 = Math.round(Math.random() * 9 + 0.5);
  zahl2 = Math.round(Math.random() * 9 + 0.5);
  zahl3 = Math.round(Math.random() * 9 + 0.5);
}

function checkGuess() {
  if (guessCounter >= 15) {
    document.getElementById("game-results").innerHTML =
      "You have reached the maximum number of tries. The code was " +
      zahl1 +
      zahl2 +
      zahl3 +
      ".";
    return;
  }

  guessCounter++;

  var guessInput = document.getElementById("guess-input");
  var guess = guessInput.value;

  if (guess.length !== 3 || isNaN(guess)) {
    document.getElementById("game-results").innerHTML =
      "Invalid guess. Please enter a 3-digit number.";
    return;
  }

  var tipp1 = guess.charAt(0);
  var tipp2 = guess.charAt(1);
  var tipp3 = guess.charAt(2);
  var richtigeStelle = 0;
  var richtigeZahl = 0;

  if (tipp1 == zahl1) {
    richtigeStelle++;
  } else if (tipp1 == zahl2 || tipp1 == zahl3) {
    richtigeZahl++;
  }
  if (tipp2 == zahl2) {
    richtigeStelle++;
  } else if (tipp2 == zahl1 || tipp2 == zahl3) {
    richtigeZahl++;
  }
  if (tipp3 == zahl3) {
    richtigeStelle++;
  } else if (tipp3 == zahl1 || tipp3 == zahl2) {
    richtigeZahl++;
  }

  if (richtigeStelle === 3) {
    document.getElementById("game-results").innerHTML =
      "Congratulations! You have guessed the code correctly in " +
      guessCounter +
      " tries.";
    return;
  }

  var resultText =
    "Guess: " +
    guess +
    "<br>" +
    "Correct numbers in correct positions: " +
    richtigeStelle +
    "<br>" +
    "Correct numbers in wrong positions: " +
    richtigeZahl +
    "<br>" +
    "Guesses made: " +
    guessCounter;

  document.getElementById("game-results").innerHTML = resultText;

  guessInput.value = "";
}
