// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, 
// falli subiti.
// Nome sarà l’unica proprietà da compilare, 
// le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array 
// i cui elementi contengono solo nomi e falli subiti e 
// stampiamo tutto in console. 


let squadre=[
    {
        'nome': 'Gondor',
        'punti': 0,
        'falli': 0
    },
    {
        'nome': 'La Contea',
        'punti': 0,
        'falli': 0
    },
    {
        'nome': 'Gran Burrone',
        'punti': 0,
        'falli': 0
    },
    {
        'nome': 'Mordor',
        'punti': 0,
        'falli': 0
    },
    {
        'nome': 'Terre Selvagge',
        'punti': 0,
        'falli': 0
    },
]




for(let i=0; i<squadre.length;i++){
    squadre[i]['punti']=getRandomInt(20);
    squadre[i]['falli'] = getRandomInt(20);
 let  {nome,punti,falli}=squadre[i];
 
 document.getElementById('container').innerHTML+=`<div>La squadra ${nome} ha subito ${falli} falli</div>`;
}

 








function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}