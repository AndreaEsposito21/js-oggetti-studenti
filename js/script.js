// Descrizione:
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// Es. 1 --------------------------------- ->
//
// Oggetto studente -> nome, cognome e età
//
var studente = {
    'nome': 'Andrea',
    'cognome': 'Esposito',
    'eta': 29
};

//
// Ciclo For-in di studente con stampa
//
for (var key in studente) {
    console.log('Esercizio 1: ', key + ' ' + studente[key] );
};
//
// Fine E. 1 --------------------------------- ->

// Es. 2 --------------------------------- ->
//
// Array oggetti studenti -> nome, cognome e età
//
var arrayStudenti = [
    {
        'nome': 'Goffredo',
        'cognome': 'Di Buglione',
        'eta': 40
    },

    {
        'nome': 'Federico',
        'cognome': 'Barbarossa',
        'eta': 68
    },

    {
        'nome': 'Ruggero',
        'cognome': "D'Altavilla",
        'eta': 59
    }
];

//
// Ciclo For per gli studenti e For-in con stampa - aggiunto solo per chiarezza all'es 2, basta il ciclo dell'es 3 -
//
for (var i = 0; i < arrayStudenti.length; i++) {
    var thisStudenti = arrayStudenti[i];
    console.log('Esercizio 2: ', thisStudenti);

    for (var chiave in thisStudenti) {
        console.log( chiave + ' ' + thisStudenti[chiave]);
    };
};
//
// Fine Es. 2 --------------------------------- ->

// Es. 3 --------------------------------- ->
//
// Creo più variabili dove chiedo all'utente di inserire i dati e una variabile oggetto che le conterrà e che pusherò nell'arrayStudenti
//
var nuovoNome = prompt('Inserisci Nome');
var nuovoCognome = prompt('Inserisci Cognome');
var nuovaEta = parseInt(prompt("Inserisci l'età"));

var nuovoStudente = {
    'nome': nuovoNome,
    'cognome': nuovoCognome,
    'eta': nuovaEta
};

arrayStudenti.push(nuovoStudente);
//
// Ciclo For per gli studenti e For-in con stampa
//
for (var j = 0; j < arrayStudenti.length; j++) {
    var thisNuoviStudenti = arrayStudenti[j];
    console.log('Esercizio 3: ', thisNuoviStudenti);

    for (var clef in thisNuoviStudenti) {
        console.log( clef + ' ' + thisNuoviStudenti[clef]);
    };
};
//
// Fine Es. 3 --------------------------------- ->