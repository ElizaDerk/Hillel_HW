do{
    var userAge = prompt('Сколько Вам лет?', '')
}while(isNaN(userAge) || userAge < 2 || userAge > 99);
        if (userAge % 10 >= 5 && userAge % 10 <= 9 || userAge % 10 === 0){
            alert(`Тебе ${userAge} лет!`)
        }

        else{
            alert(`Тебе ${userAge} года!`)
        }
