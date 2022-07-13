let arr = [1, 8, 37, 5, 17];
// let arr = [8, 17];
// let arr = [8];

let max = arr[0];
function getMax(arr, index) {
    if(index === arr.length){
        return max
    }

    max = arr[index] > max ? arr[index] : max;
    index++;
    return getMax(arr, index)
}
console.log(getMax(arr, 0))
