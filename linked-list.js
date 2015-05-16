var Queue = (function () {

  var Node = function (value) {
    this.value = value
    this.nextNode = null;
  }

  var LinkedList = function () {
    this.head = null
    this.tail = null
  }

  LinkedList.prototype.appendToTail = function(el) {
    if (this.tail === null) {
      this.head = this.tail = new Node(el)
    } else {
      var node = this.tail.nextNode = new Node(el)
      this.tail = node
    }
  };

  LinkedList.prototype.unshift = function() {
    if(this.head !== null) {
      this.head = this.head.nextNode
    }
  };

  LinkedList.prototype.view = function() {
    cursor = this.head
    string = ''
    while(cursor !== null){
      string += (cursor.value + ' -> ')
      cursor = cursor.nextNode
    }
    console.log(string);
    return string
  };

  return new LinkedList
})();

// driver code //
list = Queue
list.appendToTail("first")
list.appendToTail("second")
list.appendToTail("third")
list.unshift()
list.appendToTail("fourth")
list.view()
