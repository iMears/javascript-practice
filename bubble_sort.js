function bubbleSort(array) {
  var n = array.length - 1;
  while (true) {
    var swapped = false;
    for(var i = 0; i < n; i++) {
      if (array[i] > array[i+1]) {
        array.swap(i, i+1)
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return array;
}

Array.prototype.swap = function(a, b) {
  var x = this[a];
  this[a] = this[b];
  this[b] = x;
  return this;
}

console.log([1,2].swap(0,1));
console.log(bubbleSort([4, 5, 2, 1, 3]));
console.log(bubbleSort([5, 4, 3, 2, 1]));
console.log(bubbleSort([100, 6, 14, 57, 1]));