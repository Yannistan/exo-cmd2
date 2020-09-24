import readlineSync from 'readline-sync'


let count = 0;
let choix_q1 = ['langage', 'compilateur']
let reponse1 = readlineSync.keyInSelect(choix_q1, 'Le C++ est un: ')
switch (reponse1) {
    case 0:
        console.log(`The answer was: "langage"`)
        break;
    case 1:
        console.log(`The anser was: "compilateur"`)
        break;
    default:
        console.log('bad choice')

}

if (reponse1 == 0)
    count++;

let choix_q2 = ['Vrai', 'Faux']
let reponse2 = readlineSync.keyInSelect(choix_q2, 'TypeScript est une évolution de Javascript: ')

switch (reponse2) {
    case 0:
        console.log(`The answer was: "Vrai"`)
        break;
    case 1:
        console.log(`The anser was: "Faux"`)
        break
    default:
        console.log('bad choice')
}

if (reponse2 == 0)
    count++

let choix_q3 = ['Vrai', 'Faux']
let reponse3 = readlineSync.keyInSelect(choix_q3, 'Lire les cours avant de faire les éxercices est inutile:')

switch (reponse3) {
    case 0:
        console.log(`The answer was: "Vrai"`)
        break;
    case 1:
        console.log(`The anser was: "Faux"`)
        break
    default:
        console.log('bad choice')
}

if (reponse3 == 1)
    count++

let choix_q4 = ['Vrai', 'Faux']
let reponse4 = readlineSync.keyInSelect(choix_q4, 'react.js a été developpé par Google:')

switch (reponse4) {
    case 0:
        console.log(`The answer was: "Vrai"`)
        break;
    case 1:
        console.log(`The anser was: "Faux"`)
        break
    default:
        console.log('bad choice')
}

if (reponse4 == 1)
    count++

let choix_q5 = ['Vrai', 'Faux']
let reponse5 = readlineSync.keyInSelect(choix_q5, 'Ethereum est une blockchain publique')

switch (reponse5) {
    case 0:
        console.log(`The answer was: "Vrai"`)
        break;
    case 1:
        console.log(`The anser was: "Faux"`)
        break
    default:
        console.log('bad choice')
}

if (reponse5 == 0)
    count++

console.log(`Votre note est ${count}/5`);