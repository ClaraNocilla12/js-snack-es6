// 1 - Dobbiamo creare delle targhe con il loro nome in 
// maiuscolo.Ci serve quindi un nuovo array di stringhe.
// Ogni elemento del nuovo array sarà il nome dello studente 
// ma con tutte le lettere maiuscole.
// 2 - Dobbiamo creare un nuovo array con gli studenti che hanno
//  un totale di voti superiore a 70
// 3 - Dobbiamo creare un nuovo array di tutti gli studenti 
// che hanno un totale di voti superiore a 70 e id superiore
//  a 120






let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
];


let names=students.map((element) =>
       element.name.toUpperCase()
);

console.log(names)

let upGrades=students.filter((element) =>
    element.grades >70
);

console.log(upGrades);

let newStudents=upGrades.filter((element) => 
    element.id>120
);

console.log(newStudents);