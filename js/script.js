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
// Ciclo For per gli studenti e For-in con stampa
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