// let arr = [1, 8, 37, 5, 17];
let arr = [8, 17];
function max(arr) {
    if (arr.length === 1){
        return arr[0]
    }else{
        return Math.max(arr[arr.length-1]);
        max(arr)(arr, arr.length-1)
    }
}
console.log(max(arr))
