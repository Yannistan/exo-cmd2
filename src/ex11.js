import readlineSync from 'readline-sync'
import chalk from 'chalk'

if (process.argv.length !== 3) {
    console.log('usage: node guessNumber.js number')
    process.exit(1)
}
if (isNaN(process.argv[2])) {
    console.log(`Error: Argument must be a number.`)
    process.exit(1)
}

let bonnumber = Number(process.argv[2])


while (5) {
    let number = readlineSync.question('Enter a new number: ')
    if (number < bonnumber) {
        console.log(chalk.red('Nombre trop petit'))
    } 
    else if (number > bonnumber) {
        console.log(chalk.red('Nombre trop grand'))
    } 
    else {
    console.log(chalk.green('Bravo!'))
    break;
} 
}


