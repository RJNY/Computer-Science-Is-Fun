'use strict';

function generate_array (length) {
  var arr = []
  for (var i = 0; i < length; i++) {
    arr.push(1)
  };
  return arr
}

function get_products_of_all_ints_except_at_index(int_array) {
  var products_of_all_ints_except_at_index = generate_array(int_array.length)
  var product = 1

  for (var i = 0; i < int_array.length; i++) {
    products_of_all_ints_except_at_index[i] = product
    product *= int_array[i]
  };

  var product = 1;

  for (var i = int_array.length - 1; i >= 0; i--) {
    products_of_all_ints_except_at_index[i] *= product
    product *= int_array[i]
  };

  return products_of_all_ints_except_at_index
}


console.log(get_products_of_all_ints_except_at_index([2,4,10]))
