import readlineSync from 'readline-sync'

    if (process.argv.length !== 3) {
        console.log('usage: node interMajorityTest.js majorityAge')
        process.exit(1)
    }
    if (isNaN(process.argv[2])) {
        console.log(`Error: Majority age must be a number.`)
        process.exit(1)
    }
    let majority_age = Number(process.argv[2])
    let prenom = readlineSync.question('Enter your first name: ')
    let nom = readlineSync.question('Enter your last name: ')
    let age = readlineSync.question('Enter your age: ')
   
    if (age < majority_age)
        console.log(`Desolé, ${prenom} ${prenom},  vous êtes mineur, vous ne pouvez pas voter`)
    else
        console.log(`${prenom} ${nom},  vous êtes majeur, vous pouvez voter`)



