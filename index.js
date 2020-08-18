function findMinAndRemove(array){
    let minIndex = 0;
    let min = array[minIndex];
    for (let x = 1; x < array.length; x++) {
        if (array[x] < min) {
            min = array[x];
            minIndex = x;
        }
    }
    array.splice(minIndex, 1)
    return min
}

function selectionSort(array){
    let result = [];
    while (array.length > 0) {
        result.push(findMinAndRemove(array))
    }
    return result
}
