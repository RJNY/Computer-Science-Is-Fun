def get_products_of_all_ints_except_at_index(int_array)
  get_products_of_all_ints_except_at_index = [1] * int_array.length
  product = 1
  p "before iteration: #{get_products_of_all_ints_except_at_index}"

  int_array.each_with_index do |el, i|
    get_products_of_all_ints_except_at_index[i] = product
    product *= el
  end
  p "finished iteration: #{get_products_of_all_ints_except_at_index}"

  product = 1
  i = int_array.length - 1
  while i >= 0
    get_products_of_all_ints_except_at_index[i] *= product
    product *= int_array[i]
    i -= 1
    p get_products_of_all_ints_except_at_index
  end

  return get_products_of_all_ints_except_at_index
end



# result_1 = get_products_of_all_ints_except_at_index([1, 7, 3, 4])
# puts "#{result_1} #{result_1 === [84, 12, 28, 21]}"

result_2 = get_products_of_all_ints_except_at_index([2,4,10])
puts "#{result_2} #{result_2 === [40,20,8]}"
