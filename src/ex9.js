import readlineSync from 'readline-sync'


/*while (5){
    let prenom = readlineSync.question('Enter your first name: ')
    if (typeof (prenom) !== 'string')
    continue;
    else
    break;
} */
let prenom = readlineSync.question('Enter your first name: ')
let nom = readlineSync.question('Enter your last name: ')
let age = readlineSync.question('Enter your age: ')

if (age < 18)
    console.log(`Desolé, ${prenom} ${nom},  vous êtes mineur, vous ne pouvez pas voter`)
else
    console.log(`${prenom} ${nom},  vous êtes majeur, vous pouvez voter`)