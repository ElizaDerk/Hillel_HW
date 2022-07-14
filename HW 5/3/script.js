
function myFunk(number){
    let firstNum = 0;

    return function(num){
       return (firstNum += num);
    }
}

let result = myFunk();
console.log(result(3))
console.log(result(5))
console.log(result(20))
console.log(result(30))


