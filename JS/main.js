function startGame() {
    const startBtn = document.getElementById('startBtn');
    startBtn.style.display = 'none';
    const gameControls = document.getElementById('gameControls');
    gameControls.style.display = 'flex';
    const gmText = document.getElementById('gmText');
    gmText.innerText = "I have selected a number. Now guess it!"
}

let secretNumber = Math.floor(Math.random(1, 10) * 11);
console.log(secretNumber);

document.getElementById('userNuberSub').onclick = function() {

    let userGuess = document.getElementById('userNuberInp').value;

    if(userGuess == secretNumber) {
        gmText.innerText = "Congratulations! You have guessed correctly";
    } else if(userGuess > secretNumber) {
        gmText.innerText = "You have guessed high. Go lower.";
    } else if(userGuess == '') {
        gmText.innerText = "You have to input a number.";
    } else {
        gmText.innerText = "You have guessed low. Go higher.";
    }
}