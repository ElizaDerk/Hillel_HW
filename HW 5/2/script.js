let n = parseInt(prompt('Enter the number N'))
let m = parseInt(prompt('Enter the number M'))

function pow(n,m){
    let result = 1;
    for (let i = 0; i < m; i++) {
        result *= n;
    }
    return result;
}
console.log(pow(n,m))

