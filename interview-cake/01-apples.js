var stock_prices_yesterday = [100,90,110,30,80,105,130,20,40,50,60,70,90,120],
    stock_prices_the_other_day = [100,90,80,70,50,60],
    stock_prices_today = [20]

function get_max_profit (stock_prices) {
  if (stock_prices.length < 2) {
    throw "Getting a profit requires at least 2 prices"
  };

  var min_price = stock_prices[0],
      max_profit = stock_prices[1] - stock_prices[0]

  for (var i = 0; i < stock_prices.length; i++) {
    if (i === 0) {
      continue
      console.log('hi');
    };
    // if current_price less than min_price
    // set new min_price
    if(stock_prices[i] < min_price){
      min_price = stock_prices[i]
      //else if current_price greater than min_price
      //estimate profit
    } else if (stock_prices[i] > min_price){
      profit = stock_prices[i] - min_price
      //if profit is greater than the current max_profit
      //set new max_profit
      if (profit > max_profit) {
        max_profit = profit
      }
    }
  };
  return max_profit
}

console.log(get_max_profit(stock_prices_yesterday))
console.log(get_max_profit(stock_prices_the_other_day))
// console.log(get_max_profit(stock_prices_today))
