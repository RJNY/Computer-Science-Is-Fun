'use strict';

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
      var current = this._root;
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
    var count = 0

    this.traverse(function (node) {
      count++;
    })
    return count
  },
  toString: function () {
    return this.toArray().toString()
  },
  toArray: function () {
    var result = []
    this.traverse(function (node) {
      result.push(node.value)
    });
    return result
  },
  remove: function (value) {
    var found = false,
      parent = null,
      current = this._root,
      childCount,
      replacement,
      replacementParent

    while(!found && current){
      if (value < current.value) {
        parent = current
        current = current.left
      }
      else if (value > current.value) {
        parent = current
        current = current.right
      }
      else {
        found = true;
      }
    }

    if (found) {
      // count how many children current node has
      childCount = (current.left !== null ? 1 : 0) + (current.right !== null ? 1 : 0)
      if (current === this._root) {
        switch(childCount){
          // no children
          case 0:
            this._root = null
            break;
          // one child
          case 1:
            this._root = (current.right === null ? current.left : current.right);
            break;
          // two children
          case 2:
            // replacement = current.right
            // while(replacement.left){
            //   console.log('left node exists! ' + replacement.left.value)
            //   replacementParent = replacement
            //   replacement = replacement.left
            // }
            // if (replacementParent) {
            //   console.log(replacementParent.value + " exists!");
            //   // sets parent.left as the replacements previous right if it exists
            //   replacementParent.left = replacement.right
            // };

            // // set old _root left and right to new one
            // replacement.left = this._root.left
            // replacement.right = this._root.right

            // // completely replace _root with new node
            // this._root = replacement
            break;
        }
      }
    }
  }
}

// seed data //
var buildTree = (function (binaryTree) {
  var arr = [50,30,20,40,32,34,36,70,60,65,80,75,85]
  arr.forEach(function (el) {
    binaryTree.add(el)
  });
})

// driver code //
var tree = new BinarySearchTree
buildTree(tree);
console.log(tree.size())
tree.remove(50)
console.log(tree.size())
tree.remove(60)
tree.remove(65)
console.log(tree.size())
console.log(tree.toArray());
console.log(tree._root.right.left)
