"use strict"
console.clear();

// Dichiaro le variabili del HTML
const countdown = document.getElementById("countdown")
const numbersList = document.getElementById("numbers-list")
const answersForm = document.getElementById("answers-form")
const message = document.getElementById("message")
const instructions = document.getElementById("instructions")

// richiamo di funzioni 


// conto alla rovescia
let secondi = 11;
const tempo = setInterval(function () {
    if (secondi > 1) {
        countdown.innerHTML = --secondi;
    } else {
        clearInterval(tempo);
        countdown.remove();
        numbersList.remove();
    }
}, 1000);

console.log(countdown);

// creare 5 numeri randm con un array 
const numeriRandom = [];
for (let i = 0; i < 5; i++){
    numeriRandom.push(generaNumeroRandom(1, 100))
}
console.log(numeriRandom);

// stampato su crome e convertito in stringa 
numbersList.innerHTML = numeriRandom.join(" ");


