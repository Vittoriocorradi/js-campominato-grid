'use strict';

/*
----------
FUNZIONI
----------
*/

// Funzione per creare una cella
function myCreateElement(cell, className, innerText) {
    const cell = document.createElement(cell);
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