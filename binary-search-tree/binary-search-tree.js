function Node (value) {
  this.value = value
  this.left = null
  this.right = null
}

function BinarySearchTree () {
  this._root = null;
}

BinarySearchTree.prototype = {
  add: function (value) {
    var node = new Node(value)

    // if tree is empty, put node up in there
    if (this._root === null){
      this._root = node
    } else {

      //traverse the tree
      current = this._root;
      while(true){
        // if less than current value
        // go left
        if (value < current.value) {
          //if left leaf is null, set node and break
          if (current.left === null) {
            current.left = node
            break;
            //if not, set left to current and continue
          } else {
            current = current.left
          }
          //if greater than current value
          //go right
        } else if (value > current.value){
          if (current.right === null) {
            current.right = node
            break;
          } else {
            current = current.right
          }
          //if the value is equal to current, ignore it
        } else {
          break;
        }
      }
    }

  },
  remove: function (value) {},
  contains: function (value) {
    var found = false,
      current = this._root


  },
  traverse: function () {},
  size: function () {},
  toString: function () {},
  toArray: function () {},
}

tree = new BinarySearchTree
tree.add(120)
tree.add(150) // O(log n) time
tree.add(110)
tree.add(111)
tree.add(150)
console.log(tree);
