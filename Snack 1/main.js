// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti 
// proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando 
// destructuring e template literal

// 6.5 8.5

let bici=[
    { 'nome':'fixie',
       'peso': 7.5
       
    },
    {
        'nome': 'impulso',
        'peso': 6.5

    },
    {
        'nome': 'emonda',
        'peso': 8

    },
    {
        'nome': 'spring',
        'peso': 7

    }
];


let i;

let minore=bici[0]['peso'];
let nomeMinore=bici[0]['nome'];





for(i=0;i<bici.length;i++){
    
    if(bici[i]['peso']<minore){
        minore = bici[i]['peso'];
        nomeMinore=bici[i]['nome'];
        
        

    }

  
}



document.getElementById('container').innerHTML=`La bici col peso minore è ${nomeMinore} con un peso di ${minore}`