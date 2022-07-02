 //Shift
 let number = [1, 2, 3, 4]
 function shift(array) {
    for ( let i = 0; i < array.length; i++) {
        array[i] = array[i + 1];
    }
    --array.length;
    return(array);
}
number = shift(number)



//Pop
let number = [1, 2, 3, 4]
function pop(arr) {
    let res = []
    for (let i = 0; i < arr.length - 1; i++) {
        res[i] = arr[i]
    }
    return (res);
}
number = pop(number)

 
 
//Push
 let number = [1, 2, 3, 4]
 function push(arr, item) {
     return [
         ...arr,
         item
     ]
 }
 number = push(number, 5)



 //Unshift
 let number = [1, 2, 3, 4]
function unshift(array, value) {
    let res = []
    for (let i = array.length; i > 0 ; i--) {
        array[i] = array[i - 1];
    }
    array[0] = value;
    return (array);
}

number = unshift (number, 8)
