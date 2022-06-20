
do{
    var userAge = prompt('Сколько Вам лет?')
}while(isNaN(userAge) || userAge < 1 || userAge > 99);

fn=(n, arr) => n+" "+arr[(n%100>4 && n%100<20)?2:[2, 0, 1, 1, 1, 2][(n%10<5)?n%10:5]];
var arr1 = ['год', 'года', 'лет'];

alert('Вам ' + fn(userAge, arr1))



