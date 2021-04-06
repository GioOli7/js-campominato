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

var max = 5;
var numBombe = 2;
var bombe = [];
var possibilita = max - numBombe;
var utenteList = [];  //numeri inseriti dall utente
var utente = 0;

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
    utente = parseInt(prompt(`Inserisci un numero da 1 a ${max} \nTentativi riusciti ${utenteList.length} su ${possibilita}`));
    	
    // verifico che sia un numero valido
    while (utente < 1 || utente > max) {
        utente = parseInt(prompt(`Attenzione! Inserisci un numero da 1 a 5`));
    }

    // verifico se il numero corrisponde alla bomba
    if (bombe.includes(utente)) {
        console.log(`Hai preso la bomba (bomba n. ${utente})`);
    }
    // verifico che il numero inserito non sia stato già scelto
    else if (utenteList.includes(utente)) {
        console.log(`Il numero che hai scelto è stato già inserito, riprova`);
    }
    // se è tutto ok, lo pusho all interno della lista utente
    else if ( ! utenteList.includes(utente)) {
       utenteList.push(utente);
       console.log(utenteList);
    }

    // se l'utente raggiunge il numero di possibilità massime senza prendere la bomba, ha vinto!
    if (utenteList.length == possibilita) {
        console.log(`Hai vinto!!`);
    }
    

}