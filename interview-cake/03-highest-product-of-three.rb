def highest_product array_of_ints
  raise "Can't be less than 3" if array_of_ints.length < 3
  #first we will grab the first two indexes
  #and multiply them
  array_of_ints.sort!

  highest_product_of_3  = array_of_ints[0] * array_of_ints[1] * array_of_ints[2]
  highest_product_of_2  = array_of_ints[0] * array_of_ints[1]
  lowest_product_of_2   = array_of_ints[0] * array_of_ints[1]
  highest               = max(array_of_ints[0], array_of_ints[1])
  lowest                = min(array_of_ints[0], array_of_ints[1])

  for current in array_of_ints[2]..array_of_ints[-1] do
    highest_product_of_3  = max(highest_product_of_3,
                                highest_product_of_2 * current,
                                lowest_product_of_2 * current)

    highest_product_of_2  = max(highest_product_of_2, highest * current)
    lowest_product_of_2   = min(lowest_product_of_2, lowest * current)

    highest = max(highest, current)
    lowest  = min(lowest, current)
  end

  highest_product_of_3
end

def max(*args)
  max = args[0]
  args.each do |arg|
    max = arg if arg > max
  end
  max
end

def min(*args)
  min = args[0]
  args.each do |arg|
    min = arg if arg < min
  end
  min
end

result1 = highest_product([1, 3, 2, 4])
puts "#{result1} #{result1 === 24}"

