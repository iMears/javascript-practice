function insertionSort(array) {
  var n = array.length - 1
  for (var index = 0; index < n; index++) {
    var k = index + 1;
    while (k > 0 && array[k-1] > array[k]) {
      array.swap(k, k-1);
      k -= 1;
    }
  }
  return array
}

Array.prototype.swap = function(a, b) {
  var x = this[a];
  this[a] = this[b];
  this[b] = x;
  return this;
}

console.log(insertionSort([4, 5, 2, 1, 3]));
console.log(insertionSort([5, 4, 3, 2, 1]));
console.log(insertionSort([100, 6, 14, 57, 1]));