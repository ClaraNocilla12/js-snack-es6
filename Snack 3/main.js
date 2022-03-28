// Dato l'array di nomi:
// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 
// 'Simone', 'Chiara'];
// e dati due numeri min e max(min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la 
// posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni','Simone', 'Chiara'];
let newArray=[]

let min=parseInt(prompt('dammi un numero minimo compreso tra 0 e 4'));
let max = parseInt(prompt('dammi un numero massimo compreso tra 0 e 4 e maggiore del numero minimo'));

// myArray.forEach((element,index) => {
//     if(min<=index && index<=max){
//         newArray.push(element);
        
//     }
// });

// console.log(newArray);

newArray=myArray.filter((element, index) => 
    min <= index && index <= max


)

console.log(newArray);