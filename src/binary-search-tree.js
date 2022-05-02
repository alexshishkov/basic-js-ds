const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class Node {
  constructor (data) {
    this.data = data
    this.left = null
    this.right = null
  } 
}
class BinarySearchTree {
  constructor() {
    this.root = null
  }
 
  root() {
    return this.root
  }
  

  add( data ) {
   this.root = addWith(this.root, data)
   function addWith (node, data) {

     if (!node) {
       return new Node(data)
     }

     if (node.data === data) {
       return node
     }

     if (data < node.data) {
       node.left = addWith (node.left, data)
     } else {
       node.right = addWith (node.right, data)
     }
     return node

   }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};