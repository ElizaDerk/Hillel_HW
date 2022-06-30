let arrLength = parseInt(prompt("Количество цифр, которые хотите ввести"));
if (arrLength > 0){
    var arr = [];
    for ( let newArr = 0; newArr < arrLength; newArr++) {
        let number = parseInt(prompt("Введите число"));
        arr.push(number);
    }
    alert("Array:" + arr.toString())
}



