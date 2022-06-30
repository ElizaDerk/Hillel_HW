let arrLength = parseInt(prompt("Количество цифр, которые хотите ввести"));
if (arrLength > 0){
    var arrFirst = [];
    for ( let newArr = 0; newArr < arrLength; newArr++) {
        let number = parseInt(prompt("Введите число"));
        arrFirst.push(number);
    }
    alert("Array:" + arrFirst.toString())
}


let minArr = arrFirst.indexOf(Math.min(...arrFirst))
let maxArr = arrFirst.indexOf(Math.max(...arrFirst))

let minNumber = arrFirst[minArr]
let maxNumber = arrFirst[maxArr]

arrFirst[minArr] = maxNumber
arrFirst[maxArr] = minNumber

alert("Array:" + arrFirst.toString() + "." + " Минимальное значение:" + Math.min(...arrFirst) + "." + " Максимальное значение:" + Math.max(...arrFirst) + "." )


