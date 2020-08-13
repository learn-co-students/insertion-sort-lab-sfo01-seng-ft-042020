function findMinAndRemove(array) {
  let min = array[0];
  let index = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      index = i;
      min = array[i];
    }
  }
  return array.splice(index, 1)[0];
}

function selectionSort(array) {
  let sorted = [];
  while (array.length != 0) {
    let min = findMinAndRemove(array);
    sorted.push(min);
  }
  return sorted;
}
