function change_possibilities (amount, denominations) {
  var ways_of_doing_n_cents = Array.apply(null, new Array(amount+1)).map(Number.prototype.valueOf, 0)
  var ways_of_doing_n_cents[0] = 1



  return ways_of_doing_n_cents[amount]
}

console.log(change_possibilities(4,[1,2,3,4]))
