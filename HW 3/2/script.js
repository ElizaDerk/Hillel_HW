let arrLength = parseInt(prompt("Количество цифр в массиве"));
if (arrLength > 0){
    var arr = [];
    let sum = 0;
    for ( let newArr = 0; newArr < arrLength; newArr++) {
        let number = Math.trunc(Math.random()*999999) + 1;
        arr.push(number);
        sum += number;
    }
    let x = sum /arrLength;
    alert("Array:" + arr.toString()+". Mean:"+ x.toString())

}
