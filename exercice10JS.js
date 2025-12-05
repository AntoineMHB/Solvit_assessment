const prices = [100, 59.99, 200, 20.5];

for (let i = 0; i < prices.length; i++) {
  let tenPercentTax = prices[i] * 0.1;
  prices[i] = (prices[i] + tenPercentTax).toFixed(2);
}

console.log(prices);
