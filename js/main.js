'use strict';

/*
----------
FUNZIONI
----------
*/

// Funzione per creare una cella
function myCreateElement(gameCell, className, innerText) {
    const cell = document.createElement(gameCell);
    cell.classList.add(className);
    cell.innerText = innerText;
    return cell;
}

// Funzione click sulla cella
function elementClick(cell, counter, className) {
    
    cell.addEventListener('click',
    function() {
        console.log(counter);
        cell.classList.toggle(className);
    }
    )
}

/*
----------
MAIN
----------
*/

const startGame = document.getElementById('generate-game');
const gameContainer = document.querySelector('.container');

startGame.addEventListener('click',
function() {
    gameContainer.innerHTML = '';

    for (let i = 1; i <= 100; i++) {
        const cellCreated = myCreateElement('div', 'cell', i);
        gameContainer.append(cellCreated);
        elementClick(cellCreated, i, 'clicked');
    }
}
)