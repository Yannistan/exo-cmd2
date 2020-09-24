import readlineSync from 'readline-sync'



let prenom = readlineSync.question('Enter your first name: ')

let nom = readlineSync.question('Enter your last name: ')

while (5) {
    let age = readlineSync.question('Enter your age: ');
    if (Number(age) == age) {
        if (age < 18) {
            console.log(`Desolé, ${prenom} ${nom},  vous êtes mineur, vous ne pouvez pas voter`);
        } else {
            console.log(`${prenom} ${nom},  vous êtes majeur, vous pouvez voter`);
        }
        break;
    } else {
        continue;
    }
}


