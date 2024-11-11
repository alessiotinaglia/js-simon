"use strict"
console.clear();

// Dichiaro le variabili del HTML
const countdown = document.getElementById("countdown")
const numbersList = document.getElementById("numbers-list")
const answersForm = document.getElementById("answers-form")
const message = document.getElementById("message")
const instructions = document.getElementById("instructions")
const form = document.getElementById('answers-form');
const button = document.querySelector("button.ntn");
const numeriUtente = document.querySelector('.form-control');
const numeriGiusti = [];

// conto alla rovescia
let secondi = 6;
const tempo = setInterval(function () {
    if (secondi > 1) {
        countdown.innerHTML = --secondi;
    } else {
        clearInterval(tempo);
        countdown.remove();
        numbersList.remove();
        answersForm.classList.remove("d-none");
    }
}, 1500);

console.log(countdown);

// creare 5 numeri randm con un array 
const numeriRandom = [];
for (let i = 0; i < 5; i++) {
    numeriRandom.push(generaNumeroRandom(1, 100))
}
console.log(numeriRandom);
// stampato su crome e convertito in stringa 
numbersList.innerHTML = numeriRandom.join(" ");


// non ricarica la pagina + commento stampato 
form.addEventListener("submit", function (event) {
    event.preventDefault();
    for (let i = 0; i < numeriUtente.length; i++) {
        if (numeriRandom.includes(numeriUtente[i])) {
            numeriGiusti.push(numeriUtente[i]); 
            message.innerHTML = numeriGiusti;
            console.log(numeriUtente);
        }
    }
});
