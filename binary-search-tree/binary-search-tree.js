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
          // no dupes!
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

    while(!found && current){
      //if less than current value
      if (value < current.value) {
        // set current to left node
        current = current.left
      //if greater than current value
      }
      else if (value > current.value) {
        // set current to right node
        current = current.right
      }
      //found it! set found to true;
      else {
        found = true;
        break;
      }
    }
    //return result
    return found
  },
  traverse: function (process) {

    function inOrder (node) {
      if (node) {
        if (node.left !== null) {
          inOrder(node.left);
        }

        process.call(this, node);

        if (node.right !== null) {
          inOrder(node.right);
        }
      }
    }

    inOrder(this._root);
  },
  size: function () {
    count = 0

    this.traverse(function (node) {
      count++;
    })
    return count
  },
  toString: function () {
    return this.toArray().toString()
  },
  toArray: function () {
    result = []
    this.traverse(function (node) {
      result.push(node.value)
    });
    return result
  },
}

tree = new BinarySearchTree
tree.add(120)
tree.add(150) // O(log n) time
tree.add(110)
tree.add(111)
tree.add(10)
// console.log(tree);
