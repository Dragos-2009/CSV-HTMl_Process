export default function quickSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    let pivot = arr[arr.length-1][0];
    let leftArr = [];
    let rightArr = [];
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i][0] < pivot) {
            leftArr.push(arr[i]);
            
        }
        else {
            rightArr.push(arr[i]);
        }
    }
    return [...quickSort(leftArr),arr[arr.length-1], ...quickSort(rightArr)];
}

//Quick sorts first value of each array item
