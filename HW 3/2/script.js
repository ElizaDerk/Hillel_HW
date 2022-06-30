let arrLength = parseInt(prompt("Количество цифр, которые хотите ввести"));
        if (arrLength > 0){
            var arr = [];
            let sum = 0;
            for ( let newArr = 0; newArr < arrLength; newArr++) {
               let number = parseInt(prompt("Введите число"));
               arr.push(number);
               sum += number;
            }
            let x = sum /arrLength;
            alert("Array:" + arr.toString()+". Mean:"+ x.toString())

        }



