class Node
  attr_accessor :value, :next_node, :previous_node

  def initialize value, next_node, previous_node
    @value = value
    @next_node = next_node
    @previous_node = previous_node
  end
end

class LinkedList
  attr_reader :head, :tail
  def empty?
    @head == nil
  end

  def shift
    node_to_return = @head
    if node_to_return
      @head = @head.next_node
      node_to_return.value
    else
      raise "you can't shift an empty list"
    end
  end

  def pop
    node_to_return = @tail
    if node_to_return
      @head = @head.next_node
      @head.previous_node = nil
      if @tail.previous_node == node_to_return
        @tail.previous_node = nil
      end
      node_to_return.value
    else
      raise "you can't shift an empty list"
    end
  end

  def append value
    if empty?
      @head = @tail = Node.new(value, nil, nil)
    else
      new_node = Node.new(value, nil, @tail)
      @tail.next_node = new_node
      @tail = new_node
    end
    self
  end

  def prepend value
    if empty?
      @head = @tail =  Node.new(value, nil, nil)
    else
      new_node = Node.new(value, @head, nil)
      @head.previous_node = new_node
      @head = new_node
    end
    self
  end

  def to_s
    cursor = @head
    while cursor !=nil
      print "#{cursor.value} <->"
      cursor = cursor.next_node
    end
    print "\n"
  end
end

# class MyStack
#   def initialize
#     @list = LinkedList.new
#   end

#   def push value
#     @list.prepend(value)
#   end

#   def pop
#     @list.shift
#   end
# end

# class MyQueue
#   def initialize
#     @list = LinkedList.new
#   end

#   def endqueue value
#     @list.append(value)
#     self
#   end

#   def dequeue
#     @list.shift
#   end
# end

binding.pry
