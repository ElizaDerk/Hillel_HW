function doFunction(x, y, foo){
    return foo(x,y)
}
function quotient(x, y){
    return x % y
}

console.log(doFunction(5, 2, quotient))
