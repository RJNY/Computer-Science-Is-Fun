var App = (function () {

  function Stack () {
    this.top = null
  }

  Stack.prototype.pop = function() {
    this.top = this.top.next
  };



  Stack.prototype.push = function(el) {
    var next_node = this.top
    this.top = new Node(el, next_node)
  };

  Stack.prototype.peek = function() {
    if (this.top !== null) {
      console.log(this.top.value);
      return this.top.value
    };
    console.log("stack is empty");
    return null
  };

  function Node (value, next) {
    this.value = value
    this.next = next
  }

  return new Stack
})()

stack = App
stack.peek() //empty
stack.push("first")
stack.push("second")
stack.push("third")
stack.peek()
stack.pop() // pop 'third'
// stack.top = '' // how to make private?
stack.peek()

