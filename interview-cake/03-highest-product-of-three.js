'use strict';

function highest_product (array_of_ints) {
  if (array_of_ints < 3) {throw "Array must have 3 or more integers"}

      array_of_ints = array_of_ints.sort() // O(n log n)

  var highest = find.max(array_of_ints[0], array_of_ints[1]),
      lowest = find.min(array_of_ints[0], array_of_ints[1]),

      highest_product_of_2 = array_of_ints[0] * array_of_ints[1],
      lowest_product_of_2 = array_of_ints[0] * array_of_ints[1],

      highest_product_of_3 = array_of_ints[0] * array_of_ints[1] * array_of_ints[2];

  for (var i = 2; i < array_of_ints.length; i++) {
    var current = array_of_ints[i]

    highest_product_of_3 = find.max( highest_product_of_3,
                                highest_product_of_2 * current,
                                lowest_product_of_2 * current)

    highest_product_of_2 = find.max(highest_product_of_2, highest * current)
    lowest_product_of_2 = find.min(lowest_product_of_2, lowest * current)

    highest = find.max(highest, current)
    lowest = find.min(lowest,current)
  };


  return highest_product_of_3;
}

// helper methods
var find = {
  min: function () {
    var min = arguments[0]
    for (var i = 0; i < arguments.length; i++) {
      min = arguments[i] < min ? arguments[i] : min
    };
    return min
  },

  max: function () {
    var max = arguments[0]
    for (var i = 0; i < arguments.length; i++) {
      max = arguments[i] > max ? arguments[i] : max
    };
    return max
  }
}

var array_of_ints = [-10,-10,1,3,2]

console.log(highest_product(array_of_ints),
            highest_product(array_of_ints) === 300)
