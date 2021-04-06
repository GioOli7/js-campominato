// Descrizione
// - Il computer deve generare 16 numeri casuali da 1 a 100 (bombe).
// - In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta, 
//          se il numero è presente nella lista dei numeri generati la partita termina altrimenti continua chiedendo all’utente un altro numero.
// - La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// - Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50

var max = 0;
var numBombe = 16;
var bombe = [];
var possibilita = 0;
var utenteList = [];  //numeri inseriti dall utente
var utente = 0;

//BONUS - Scelta difficoltà gioco
var difficult = parseInt( prompt('Scegli la difficoltà alla quale giocare. \nDigita 0 per Facile\nDigita 1 per Medio\nDigita 2 per Difficile').trim() );
while (isNaN(difficult) || difficult < 0 || difficult >= 3) {
    difficult = parseInt(prompt('Scegli la difficoltà alla quale giocare. \nDigita 0 per Facile\nDigita 1 per Medio\nDigita 2 per Difficile'));
}

switch (difficult) {
    case 0:
        max = 100;
        break;
    case 1:
        max = 80;
        break;
    case 2:
        max = 50;
}
possibilita = max - numBombe;

// popolo la lista bombe con 16 numeri unici
while (bombe.length < numBombe) {
    rand = Math.floor(Math.random() * max) + 1;
    if (! bombe.includes(rand)) {
        bombe.push(rand);
    }
}
console.log(bombe);


while (! bombe.includes(utente) && utenteList.length < possibilita) {
    // chiedo all utente di inserire un numero da 1 a 5
    utente = parseInt(prompt(`Inserisci un numero da 1 a ${max} \nTentativi riusciti ${utenteList.length} su ${possibilita}`).trim());
    	
    // verifico che sia un numero valido
    while (isNaN(utente) || utente < 1 || utente > max) {
        utente = parseInt(prompt(`Attenzione! Inserisci un numero da 1 a ${max}`));
    }

    // verifico se il numero corrisponde alla bomba
    if (bombe.includes(utente)) {
        console.log(`-- GAME OVER --`);
        console.log(`Hai preso la bomba (bomba n. ${utente})`);
        console.log(`Hai effettuato ${utenteList.length} tentativi corretti prima di perdere`);
    }
    // verifico che il numero inserito non sia stato già scelto
    else if (utenteList.includes(utente)) {
        console.log(`Il numero che hai scelto è stato già inserito, riprova`);
    }
    // se è tutto ok, lo pusho all interno della lista utente
    else if ( ! utenteList.includes(utente)) {
       utenteList.push(utente);
    }

    // se l'utente raggiunge il numero di possibilità massime senza prendere la bomba, ha vinto!
    if (utenteList.length == possibilita) {
        console.log(`Hai vinto!!`);
    }

}