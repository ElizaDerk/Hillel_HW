


function myFunk(number){
    let firstNum = 3;

    return function Funk(number){
        let secondNum = parseInt(prompt("Enter the number"));
        return (firstNum + secondNum);
    }
}

let num = myFunk()

console.log(num(myFunk()));


