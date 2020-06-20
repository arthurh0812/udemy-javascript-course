/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls two dices as many times as he whishes. Each result gets added to his ROUND score
- BUT, if the player rolls a 1 from the two dices, all his ROUND score gets lost. After that, it's the next player's turn
- BUT, if the player rolls two 6 at once, all his GLOBAL score get lost. After that, it's the next players turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach the inputted value of points on GLOBAL score wins the game (default: 100 points)
*/

var scores, roundScore, activePlayer, gamePlaying;

// initialize game
init();

// event listeners for  1. the roll-button, 2. the hold-button and 3. the new-button
// 1.
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        // 1. random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        // 2. display the result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

        // 3. update the round score IF the rolled number is NOT 1
        if (dice1 === 6 && dice2 === 6) {
            // set global score to 0
            scores[activePlayer] = 0;
            // update UI
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            // next player
            nextPlayer();
        }
        else if (dice1 === 1 || dice2 === 1){
            // next player
            nextPlayer();
        }
        else if (dice1 !== 1 && dice2 !== 1) {
            // add dice to roundScore
            roundScore += (dice1 + dice2);
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            // show hold button
            document.querySelector('.btn-hold').style.display = 'block';
        };
    };
});
// 2.
document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {

        // 1. add current score to the active player's GLOBAL score
        scores[activePlayer] += roundScore;

        // 2. update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // 3. get input
        var input = document.querySelector('.winning-score').value;
        var winningScore;
        // undefined, null, 0 or "" are COERCED to false
        // anything else is COERCED to true
        if (input) {
            winningScore = input;
        }
        else {
            winningScore = 100;
        }

        // 3. check if player won the game
        if (scores[activePlayer] >= winningScore) {

            // set current round score to 0
            document.querySelector('#current-' + activePlayer).textContent = '0';
            // show winner
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            // hide dice-images, roll-button and hold-button
            hideDices();
            document.querySelector('.btn-roll').style.display = 'none';
            document.querySelector('.btn-hold').style.display = 'none';
            // add winner class to panel of the the active player and remove the active class from the panel of the active player
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }
        else {
            // next player
            nextPlayer();
        };
    };
});
// 3.
document.querySelector('.btn-new').addEventListener('click', init);

function init () {

    // set game playing to true
    gamePlaying = true;
    // 1. set scores both to 0, set active player to 0 and set the current round score to 0 
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;

    // 2. hide the dice-images and the hold-button
    hideDices();
    document.querySelector('.btn-hold').style.display = 'none';
    document.querySelector('.btn-roll').style.display = 'block';

    // 3. set all the scores to 0 in the HTML
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
};

function nextPlayer () {

    // if current player is 0 change it to 1 and vice versa
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    // set the current score variable to 0
    roundScore = 0;

    // set both current scores to 0 in the HTML
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0'; 

    // add and remove the active class corresponding to which element does have it or not
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // hide dice-images and hold-button
    hideDices();
    document.querySelector('.btn-hold').style.display = 'none';
};

function hideDices () {
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
};