def make_change(amount, denominations=[])
  possibilities = Array.new(amount + 1, 0) #[0] * (amount + 1)
  possibilities[0] = 1

  denominations.each do |coin|
    p "#{coin}..#{amount}"
    for higher_amount in coin..(amount) do
      p "#{higher_amount} - #{coin} = #{higher_amount - coin}"
      remainder = higher_amount - coin
      possibilities[higher_amount] += possibilities[remainder]
    end
  end
  possibilities[amount]
end

result1 = make_change(4, [1,2,3])
p "#{result1} #{result1 === 4}"
