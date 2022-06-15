
let name = prompt('What is you name?');
while (isEmptyOrNull(name)) {
    name = prompt('Please, write your name!');
}
console.log(name)
alert(`Your name is ${name}!`);


let lastName = prompt('What is you surname?');
while (isEmptyOrNull(lastName)) {
    lastName = prompt('Please, write your surname!');
}
console.log(lastName)
alert(`You are ${name} ${lastName}!`);


let userAge = prompt('How old are you?');
while (isEmptyOrNull(userAge)) {
    userAge = prompt('Please, tell me your age!');
}
console.log(userAge)
alert(`${name} ${userAge} years old.`)


let userMail = prompt('Please, give me your email!')
while (isEmptyOrNull(userMail)) {
    userMail = prompt('Please, tell me your email!');
}
console.log(userMail)
alert(`${name}, we will write you soon on this email:${userMail}!`)


function isEmptyOrNull(value) {
    if (value == null)
        return true
    else return value.trim().length == 0;
}