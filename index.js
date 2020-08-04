function findMinAndRemove(array){
  //find min in array
  //remove min from the array and return it
  let sorted = array.sort((a,b) => a - b);
  return sorted.shift();
}

function selectionSort(array){
  //run findMinAndRemove function to get lowest in the array
  //push that number into the new sorted array
  //return sorted array
  let sortedArray = [];
  let newMin;
  while (array.length !== 0) {
    newMin = findMinAndRemove(array)
    sortedArray.push(newMin)
  }
  return sortedArray
}
