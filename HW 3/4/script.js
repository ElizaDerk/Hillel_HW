 //Shift
 let numbers1 = [1, 2, 3, 4]
 function shift(array) {
    for ( let i = 0; i < array.length; i++) {
        array[i] = array[i + 1];
    }
    --array.length;
    return(array);
}
numbers1 = shift(numbers1)



//Pop
let numbers = [1, 2, 3, 4]
function pop(arr) {
    let res = []
    for (let i = 0; i < arr.length - 1; i++) {
        res[i] = arr[i]
    }
    return (res);
}
numbers = pop(numbers)





