const maleNames = {
    'A': ['Artem', 'Anton', 'Albert'],
    'B': ['Boris', 'Bogdan', 'Bormalei']
}

const femaleNames = {
    'A': ['Anastasiya', 'Anna', 'Alina'],
    'B': ['Valentina', 'Vasilisa', 'Viktoriya']
}

const surnames = {
    'A': ['Adams','Anders','Anderson'],
    'B': ['Braid','Brown','Barton'],
}

function getRandomIndex(array) {
    console.log(`array: ${array}`)
    return Math.floor(Math.random() * array.length);
}


function isEmptyOrNull(value) {
    if (value == null)
        return true
    else return value.trim().length === 0;
}


let firstNameLetter = prompt("Write a letter from A to B")
while (isEmptyOrNull(firstNameLetter)) {
    firstNameLetter = prompt('Please, write letter ONLY from A to B!');
}

let firstSurnameLetter = prompt("Please, write a letter for surname from A to B").toUpperCase()
while (isEmptyOrNull(firstSurnameLetter)) {
    firstSurnameLetter = prompt('Please, write letter for surname ONLY from A to B!');
}

let userGender = prompt("Are you male of female? Please write, male or female.", 'male')



firstSurnameLetter = firstSurnameLetter.toUpperCase()
firstNameLetter = firstNameLetter.toUpperCase()

let name = ''
let surName = ''

function getFullNames(dataBaseNames, dataBaseSurnames) {
    let randomIndex = getRandomIndex(dataBaseNames[firstNameLetter])
    name = dataBaseNames[firstNameLetter][randomIndex]
    surName = dataBaseSurnames[firstSurnameLetter][randomIndex]

}

if(userGender === 'male'){
    getFullNames(maleNames, surnames)
}else if (userGender === 'female'){
    getFullNames(femaleNames, surnames)
}else{
    console.log('Isnt correct!')
}

console.log(`Your name: ${name} : ${surName}`)
