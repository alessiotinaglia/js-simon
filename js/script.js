"use strict"
console.clear();

// Dichiaro le variabili

const countdown = document.getElementById("countdown")
const numbersList = document.getElementById("numbers-list")
const answersForm = document.getElementById("answers-form")
const message = document.getElementById("message")
const instructions = document.getElementById("instructions")

// conto alla rovescia

let secondi = 11;
const tempo = setInterval(function (){
    if (secondi > 1) {
        countdown.innerHTML = --secondi;
    } else {
        clearInterval(tempo);
        countdown.remove();
    }
}, 1000);

console.log(countdown);

// creare 5 numeri randm con arrei 



