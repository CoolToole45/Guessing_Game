// Main Gameplay Logic.
function startGame() {
    var secretNumber = Math.floor(Math.random(1, 10) * 11);
    console.log(secretNumber);

    const startBtn = document.getElementById('startBtn');
    startBtn.style.display = 'none';
    const gameControls = document.getElementById('gameControls');
    gameControls.style.display = 'flex';
    const gmText = document.getElementById('gmText');
    gmText.innerText = "I have selected a number. Now guess it!"
    const resetBtn = document.getElementById('resetBtn');
    resetBtn.style.display = 'none';

    document.getElementById('userNuberSub').onclick = function() {

        let userGuess = document.getElementById('userNuberInp').value;
    
        if(userGuess == secretNumber) {
            gmText.innerText = "Congratulations! You have guessed correctly";
            gameControls.style.display = 'none';
            resetBtn.style.display = 'block';
        } else if(userGuess > secretNumber) {
            gmText.innerText = "You have guessed high. Go lower.";
        } else if(userGuess == '') {
            gmText.innerText = "You have to input a number.";
        } else {
            gmText.innerText = "You have guessed low. Go higher.";
        }
    }
}

// Reset Game
function resetGame() {
    startGame();
}

// Click To Stop Music
function musicControl() {
    const gameAudio = document.getElementById('gameAudio');
    gameAudio.remove();   
}


// Animation For Decorational Coins
function rotate() {
    const rotatingCoinLeft = document.getElementById('rotatingCoinLeft');
    if(!rotatingCoinLeft.classList.contains('rotateLeft')) {
        rotatingCoinLeft.classList.add('rotateLeft');
    } else {
        rotatingCoinLeft.classList.remove('rotateLeft');
    }

    const rotatingCoinRight = document.getElementById('rotatingCoinRight');
    if(!rotatingCoinRight.classList.contains('rotateLeft')) {
        rotatingCoinRight.classList.add('rotateLeft');
    } else {
        rotatingCoinRight.classList.remove('rotateLeft');
    }
}

let rotateInterval = setInterval(rotate, 500);