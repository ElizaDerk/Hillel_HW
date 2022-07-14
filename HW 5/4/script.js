function doFunction(x, y, foo){
    return foo(x,y)
}
function quotient(x, y){
    return parseInt(x / y)
}

console.log(doFunction(5, 2, quotient))
console.log(doFunction(7, 2, quotient))
